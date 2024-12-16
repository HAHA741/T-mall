package com.yami.shop.common.config;

import org.springframework.stereotype.Component;

@Component
public class WxPayConfig {

    // 微信支付相关配置参数
    private String appId = "your-app-id"; // 微信公众账号ID
    private String mchId = "your-mch-id"; // 商户号
    private String apiV3Key = "your-api-v3-key"; // 微信支付V3密钥
    private String privateKeyPath = "/path/to/apiclient_key.pem"; // 商户私钥路径
    private String certificatePath = "/path/to/apiclient_cert.pem"; // 商户证书路径
    private String notifyUrl = "https://your-domain.com/pay/notify"; // 微信支付异步通知回调地址

    // Getter and Setter方法

    public String getAppId() {
        return appId;
    }

    public void setAppId(String appId) {
        this.appId = appId;
    }

    public String getMchId() {
        return mchId;
    }

    public void setMchId(String mchId) {
        this.mchId = mchId;
    }

    public String getApiV3Key() {
        return apiV3Key;
    }

    public void setApiV3Key(String apiV3Key) {
        this.apiV3Key = apiV3Key;
    }

    public String getPrivateKeyPath() {
        return privateKeyPath;
    }

    public void setPrivateKeyPath(String privateKeyPath) {
        this.privateKeyPath = privateKeyPath;
    }

    public String getCertificatePath() {
        return certificatePath;
    }

    public void setCertificatePath(String certificatePath) {
        this.certificatePath = certificatePath;
    }

    public String getNotifyUrl() {
        return notifyUrl;
    }

    public void setNotifyUrl(String notifyUrl) {
        this.notifyUrl = notifyUrl;
    }
}
