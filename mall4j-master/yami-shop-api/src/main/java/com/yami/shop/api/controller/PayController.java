/*
 * Copyright (c) 2018-2999 广州市蓝海创新科技有限公司 All rights reserved.
 *
 * https://www.mall4j.com/
 *
 * 未经允许，不可做商业用途！
 *
 * 版权所有，侵权必究！
 */

package com.yami.shop.api.controller;

import com.yami.shop.bean.app.param.PayParam;
import com.yami.shop.bean.pay.PayInfoDto;
import com.yami.shop.model.PayParamData;
import com.yami.shop.security.api.model.YamiUser;
import com.yami.shop.security.api.util.SecurityUtils;
import com.yami.shop.service.PayService;
import com.yami.shop.service.PaymentService;
import io.swagger.v3.oas.annotations.tags.Tag;
import io.swagger.v3.oas.annotations.Operation;
import lombok.AllArgsConstructor;
import com.yami.shop.common.response.ServerResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author lanhai
 */
@RestController
@RequestMapping("/p/order")
@Tag(name = "订单接口")
@AllArgsConstructor
public class PayController {

    private final PayService payService;
    private final PaymentService paymentService;


    /**
     * 支付接口
     */
    @PostMapping("/pay")
    @Operation(summary = "根据订单号进行支付" , description = "根据订单号进行支付")
    public ServerResponseEntity<Void> pay(@RequestBody PayParam payParam) {
        YamiUser user = SecurityUtils.getUser();
        String userId = user.getUserId();


        PayInfoDto payInfo = payService.pay(userId, payParam);
        payService.paySuccess(payInfo.getPayNo(), "");
        return ServerResponseEntity.success();
    }

    /**
     * 普通支付接口
     */
    @PostMapping("/normalPay")
    @Operation(summary = "根据订单号进行支付" , description = "根据订单号进行支付")
    public ServerResponseEntity<PayParamData> normalPay(@RequestBody PayParam payParam) {

        YamiUser user = SecurityUtils.getUser();
        String userId = user.getUserId();
        String openId = user.getOpenId();
        PayInfoDto pay = payService.pay(userId, payParam);

        try {
            String orderNumbers = payParam.getOrderNumbers();
            //openId 用户的唯一标识,amount 指定金额
            PayParamData payParamData  = paymentService.unifiedOrder(openId,"1",30,orderNumbers);
            return ServerResponseEntity.success(payParamData);
        } catch (Exception e) {
            e.printStackTrace();
//            return "Error: " + e.getMessage();
        }

        // 根据内部订单号更新order settlement
        payService.paySuccess(pay.getPayNo(), "");
        PayParamData payParamData = new PayParamData();
        return ServerResponseEntity.success(payParamData);
    }
}
