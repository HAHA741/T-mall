package com.yami.shop.common.config;

import org.springframework.stereotype.Component;
//自定义微信支付方法
@Component
public class WxPayConfig {

    // 微信支付相关配置参数
    private String appId = "wx0a05280b97905c00"; // 微信公众账号ID
    private String mchId = "1703514380"; // 商户号
    private String apiV3Key = "G6m9KvT2sQzJ8aW1xB5dR0cP4oNlU7eH"; // 微信支付V3密钥
    private String privateKeyPath = "/opt/path/apiclient_key.pem"; // 商户私钥路径
    private String certificatePath = "/opt/path/apiclient_cert.pem"; // 商户证书路径
    private String notifyUrl = "http://49.232.152.51"; // 微信支付异步通知回调地址

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
