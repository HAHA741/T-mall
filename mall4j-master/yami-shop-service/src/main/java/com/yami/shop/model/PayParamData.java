package com.yami.shop.model;

import lombok.Data;

@Data
public class PayParamData {

    

    private String paySign;

    private String nonceStr;
    private String packageStr;
    private String timestamp;
    private String signType;


}
