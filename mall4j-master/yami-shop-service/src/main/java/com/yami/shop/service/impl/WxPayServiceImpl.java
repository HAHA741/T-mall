package com.yami.shop.service.impl;

import com.google.gson.Gson;
import com.yami.shop.common.config.WxPayConfig;
import com.yami.shop.service.PaymentService;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.nio.file.Files;
import java.nio.file.Paths;
import java.security.KeyFactory;
import java.security.PrivateKey;
import java.security.Signature;
import java.security.spec.PKCS8EncodedKeySpec;
import java.util.Base64;
import java.util.HashMap;
import java.util.Map;

@Service
public class WxPayServiceImpl implements PaymentService {
    private final WxPayConfig wxPayConfig;

    @Autowired
    public WxPayServiceImpl(WxPayConfig wxPayConfig) {
        this.wxPayConfig = wxPayConfig;
    }

    @Override
    public String unifiedOrder(String openId, String description, int amount) throws Exception {
        // Step 1: 构建请求数据
        Map<String, Object> requestData = new HashMap<>();
        requestData.put("appid", wxPayConfig.getAppId());
        requestData.put("mchid", wxPayConfig.getMchId());
        requestData.put("description", description);
        requestData.put("notify_url", wxPayConfig.getNotifyUrl());

        Map<String, Object> amountMap = new HashMap<>();
        amountMap.put("total", amount);
        requestData.put("amount", amountMap);

        Map<String, Object> payerMap = new HashMap<>();
        payerMap.put("openid", openId);
        requestData.put("payer", payerMap);

        String requestJson = new Gson().toJson(requestData);

        // Step 2: 签名生成
        String nonceStr = String.valueOf(System.currentTimeMillis());
        String timestamp = String.valueOf(System.currentTimeMillis() / 1000);
        String signature = generateSignature("POST", "/v3/pay/transactions/jsapi", timestamp, nonceStr, requestJson);

        // Step 3: 发送请求
        HttpPost httpPost = new HttpPost("https://api.mch.weixin.qq.com/v3/pay/transactions/jsapi");
        httpPost.setHeader("Content-Type", "application/json");
        httpPost.setHeader("Authorization", String.format(
                "WECHATPAY2-SHA256-RSA2048 mchid=\"%s\",nonce_str=\"%s\",signature=\"%s\",timestamp=\"%s\",serial_no=\"%s\"",
                wxPayConfig.getMchId(),
                nonceStr,
                signature,
                timestamp,
                "商户证书序列号"
        ));
        httpPost.setEntity(new StringEntity(requestJson));

        try (CloseableHttpClient client = HttpClients.createDefault();
             CloseableHttpResponse response = client.execute(httpPost)) {

            String responseBody = new String(response.getEntity().getContent().readAllBytes());
            System.out.println("Response: " + responseBody);

            // Step 4: 提取 prepay_id
            Map<String, Object> responseMap = new Gson().fromJson(responseBody, Map.class);
            return (String) responseMap.get("prepay_id");
        }
    }

    private String generateSignature(String method, String url, String timestamp, String nonceStr, String body) throws Exception {
        String message = method + "\n" + url + "\n" + timestamp + "\n" + nonceStr + "\n" + body + "\n";

        PrivateKey privateKey = loadPrivateKey(wxPayConfig.getPrivateKeyPath());
        Signature signature = Signature.getInstance("SHA256withRSA");
        signature.initSign(privateKey);
        signature.update(message.getBytes());
        return Base64.getEncoder().encodeToString(signature.sign());
    }

    private PrivateKey loadPrivateKey(String filePath) throws Exception {
        String key = Files.readString(Paths.get(filePath));
        String privateKeyPEM = key.replace("-----BEGIN PRIVATE KEY-----", "")
                .replace("-----END PRIVATE KEY-----", "")
                .replaceAll("\\s+", "");
        byte[] encoded = Base64.getDecoder().decode(privateKeyPEM);
        PKCS8EncodedKeySpec keySpec = new PKCS8EncodedKeySpec(encoded);
        return KeyFactory.getInstance("RSA").generatePrivate(keySpec);
    }
}
