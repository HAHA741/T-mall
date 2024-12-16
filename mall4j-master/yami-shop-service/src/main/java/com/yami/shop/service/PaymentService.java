package com.yami.shop.service;

public interface PaymentService {
    String unifiedOrder(String openId, String description, int amount) throws Exception;
}
