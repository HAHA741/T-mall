package com.yami.shop.security.api.controller;



import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.yami.shop.bean.model.User;
import com.yami.shop.common.exception.YamiShopBindException;
import com.yami.shop.common.util.PrincipalUtil;
import com.yami.shop.dao.UserMapper;
import com.yami.shop.security.api.model.CodeWXParam;
import com.yami.shop.security.api.model.OpenIdData;
import com.yami.shop.security.common.bo.UserInfoInTokenBO;
import com.yami.shop.security.common.dto.AuthenticationDTO;
import com.yami.shop.security.common.enums.SysTypeEnum;
import com.yami.shop.security.common.manager.PasswordCheckManager;
import com.yami.shop.security.common.manager.PasswordManager;
import com.yami.shop.security.common.manager.TokenStore;
import com.yami.shop.security.common.vo.TokenInfoVO;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.tags.Tag;
import io.swagger.v3.oas.annotations.Operation;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import com.yami.shop.common.response.ServerResponseEntity;
import org.springframework.boot.configurationprocessor.json.JSONObject;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;


/**
 * @author 菠萝凤梨
 * @date 2022/3/28 15:20
 */
@RestController
@Tag(name = "登录")
public class LoginController {
    @Autowired
    private TokenStore tokenStore;

    @Autowired
    private UserMapper userMapper;

    @Autowired
    private PasswordCheckManager passwordCheckManager;

    @Autowired
    private PasswordManager passwordManager;




    private static final String APP_ID = "wx0a05280b97905c00";
    private static final String APP_SECRET = "5fdd368a3421f9bc52203e14c5dca858";

    @PostMapping("/login")
    @Operation(summary = "账号密码(用于前端登录)" , description = "通过账号/手机号/用户名密码登录，还要携带用户的类型，也就是用户所在的系统")
    public ServerResponseEntity<TokenInfoVO> login(
            @Valid @RequestBody AuthenticationDTO authenticationDTO) {
        String mobileOrUserName = authenticationDTO.getUserName();
        User user = getUser(mobileOrUserName);

        String decryptPassword = passwordManager.decryptPassword(authenticationDTO.getPassWord());

        // 半小时内密码输入错误十次，已限制登录30分钟
        passwordCheckManager.checkPassword(SysTypeEnum.ORDINARY,authenticationDTO.getUserName(), decryptPassword, user.getLoginPassword());

        UserInfoInTokenBO userInfoInToken = new UserInfoInTokenBO();
        userInfoInToken.setUserId(user.getUserId());
        userInfoInToken.setSysType(SysTypeEnum.ORDINARY.value());
        userInfoInToken.setEnabled(user.getStatus() == 1);
        userInfoInToken.setOpenId(authenticationDTO.getOpenId());
        // 存储token返回vo
        TokenInfoVO tokenInfoVO = tokenStore.storeAndGetVo(userInfoInToken);
        return ServerResponseEntity.success(tokenInfoVO);
    }
    @PostMapping("/loginByWX")
    public ServerResponseEntity<OpenIdData> getOpenId(@Valid @RequestBody CodeWXParam codeWXParam) {
        String code = codeWXParam.getCode();
        String urlStr = String.format(
                "https://api.weixin.qq.com/sns/jscode2session?appid=%s&secret=%s&js_code=%s&grant_type=authorization_code",
                APP_ID, APP_SECRET, code
        );

        try {
            // 创建 URL 连接
            URL url = new URL(urlStr);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("GET");

            // 读取响应
            BufferedReader reader = new BufferedReader(new InputStreamReader(conn.getInputStream()));
            StringBuilder response = new StringBuilder();
            String line;
            while ((line = reader.readLine()) != null) {
                response.append(line);
            }
            reader.close();

            // 解析 JSON 响应
            JSONObject json = new JSONObject(response.toString());
            if (json.has("openid")) {
                OpenIdData openIdData = new OpenIdData(); ;
                openIdData.setOpenId(json.getString("openid"));
//                openIdData.openId = json.getString("openid");
//                return json.getString("openid");
                return ServerResponseEntity.success(openIdData);
            } else {
                System.err.println("获取 openid 失败: " + json);
                return null;
            }
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    private User getUser(String mobileOrUserName) {
        User user = null;
        // 手机验证码登陆，或传过来的账号很像手机号
        if (PrincipalUtil.isMobile(mobileOrUserName)) {
            user = userMapper.selectOne(new LambdaQueryWrapper<User>().eq(User::getUserMobile, mobileOrUserName));
        }
        // 如果不是手机验证码登陆， 找不到手机号就找用户名
        if  (user == null) {
            user = userMapper.selectOneByUserName(mobileOrUserName);
        }
        if (user == null) {
            throw new YamiShopBindException("账号或密码不正确");
        }
        return user;
    }
}
