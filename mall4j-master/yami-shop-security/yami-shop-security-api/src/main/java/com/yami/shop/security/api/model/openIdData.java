package com.yami.shop.security.api.model;


import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

@Data
public class OpenIdData {

    @Schema(description = "openId" )
    private String openId;
    public String getOpenId() {
        return openId;
    }

    public void setOpenId(String openId) {
        this.openId = openId;
    }

}
