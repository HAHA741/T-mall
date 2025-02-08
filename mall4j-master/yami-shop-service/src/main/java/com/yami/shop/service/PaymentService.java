package com.yami.shop.service;

import com.yami.shop.model.PayParamData;

public interface PaymentService {
    PayParamData unifiedOrder(String openId, String description, int amount, String orderNum) throws Exception;
}
