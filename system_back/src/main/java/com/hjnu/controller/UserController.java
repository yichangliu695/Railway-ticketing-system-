package com.hjnu.controller;

import com.hjnu.model.po.PassengerInfo;
import com.hjnu.model.po.User;
import com.hjnu.model.vo.*;
import com.hjnu.utils.RedisUtils;
import com.hjnu.service.impl.PassengerService;
import com.hjnu.service.impl.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.validation.Valid;
import java.util.List;
import java.util.Map;

/**
 *
 * 有关用户信息的业务处理层
 */
@RestController
@RequestMapping("/user")
public class UserController {
    @Resource
    private UserService userService;

    @Resource
    private PassengerService passengerService;

    @Resource
    private RedisUtils redisUtils;
    private static final Logger logger = LoggerFactory.getLogger(UserController.class);

    /**
     *
     * 用户登录
     */
    @RequestMapping(value ="/login",method = RequestMethod.POST)
    public RespBean UserLogin(@Valid @RequestBody Map<String,Object> request) {
        String username = (String) request.get("user_name");
        String password = (String) request.get("password");
        try {
            List<UserLogin> userlogins = userService.selectAllUserLogin();

            for (UserLogin userlogin : userlogins) {
                if (userlogin.getUser_phone_number().equals(username)  && userlogin.getUser_password().equals(password)) {
                    //token生成  用户信息redis缓存
                    User user  = userService.selectUserInfo(userlogin.getUser_phone_number());

                    return saveToken(user,userlogin);
                }
            }

        } catch(Exception e) {
            return new RespBean(1, "登录成功");
        }
        return new RespBean(404, "登录失败");
    }

    /**
     * 登陆成功后，向前端返回cookie中的内容 作为用户登陆的标记
     * 并且将用户登陆信息存入token中
     * 对应前端的getAdminInfo请求
     */
    @RequestMapping(value ="/info",method = RequestMethod.GET)
    public UserInfoReturnData GetUserInfo(@RequestParam String token) {
        try {
            String a = redisUtils.get(token);
            String[] data = a.split(",");
            return new UserInfoReturnData(1,new UserInfo(data[0],data[1],data[2],data[3],data[4],data[5],data[6]));
        } catch (Exception e) {
            return new UserInfoReturnData(404,new UserInfo("null","null","null","null","null","null","null"));
        }
    }

    /**
     *
     * 用户注册
     *
     * 对应前端的register请求
     */
    @RequestMapping(value ="/register",method = RequestMethod.POST)
    public RespBean UserRegister(@Valid @RequestBody Map<String,Object> request) {

        String username = (String) request.get("user_phone_number");
        String password = (String) request.get("user_password");
        String user_password_2 = (String)request.get("user_password_2");
        String user_real_name = (String)request.get("user_real_name");
        String user_email = (String) request.get("user_email");
        String user_id_number = (String)request.get("user_id_number");
        String user_gender = (String )request.get("user_gender");
        String user_address = (String)request.get("user_address");
        String user_type = (String)request.get("user_type");
        try {
            //查询此用户是否已经注册
            List<UserLogin> userlogins = userService.selectAllUserLogin();
            for (UserLogin userlogin : userlogins) {
                if(userlogin.getUser_phone_number().equals(username)) {
                    return new RespBean(403,"用户名重复");
                }
                else if(!user_password_2.equals(password)) {
                    return new RespBean(404,"两次输入不相同");
                } else {

                    int type = 0 ;
                    if(user_type.equals("成人")) {
                        type = 1;
                    }
                    int gender = -1;
                    if(user_gender.equals("女")) {
                        gender = 0;
                    } else if(user_gender.equals("男")) {
                        gender = 1;
                    }
                    try {
                        User user  = new User(username,password,user_email,user_real_name,type,user_id_number,gender,user_address);
                        boolean flag = userService.insertUser(user);
                        if(flag) {
                            return new RespBean(1,userlogin.getUser_phone_number()+"msbfajshbadsmnfbasmfa"+userlogin.getUser_password());
                        }
                        else {
                            return new RespBean(405,"注册失败");
                        }
                    }
                    catch (Exception e) {
                        return new RespBean(403,"用户名重复");
                    }


                }
            }
        } catch (Exception e) {
            return new RespBean(405,"注册失败");
        }
        return new RespBean(405,"注册失败");

    }

    @RequestMapping(value ="/signout",method = RequestMethod.GET)
    public RespBean signout() {
        try {
            return new RespBean(1,"退出成功");
        }
        catch (Exception e)
        {
            return new RespBean(404,"退出失败");
        }

    }

    /**
     *
     * 查询用户信息的接口
     *
     */
    @RequestMapping(value ="/userinfo",method = RequestMethod.GET)
    public UserInfoReturnData getUserInfo(@RequestParam String token) {
        String user = redisUtils.get(token);
        String[] data = user.split(",");
        if(data[3].equals("2")) {
            data[3] ="管理员";
        }
        if(data[3].equals("0")) {
            data[3] ="学生";
        }
        if(data[3].equals("1")) {
            data[3] ="成人";
        }
        if(data[4].equals("1")) {
            data[4] ="男";
        }
        if(data[4].equals("0"))
        {
            data[3] ="女";
        }
        return new UserInfoReturnData(1,new UserInfo(data[0],data[1],data[2],data[3],data[4],data[5],data[6]));
    }


    /**
     * 修改个人信息
     */
    @RequestMapping(value ="/changeuserinfo",method = RequestMethod.POST)
    public RespBean ChangeUserInfo(@Valid @RequestBody Map<String,Object> request) {

        String token = (String)request.get("token");
        String user_real_name = (String)request.get("user_real_name");
        String user_email = (String) request.get("user_email");
        String user_id_number = (String)request.get("user_id_number");
        String user_gender = (String )request.get("user_gender");
        String user_address = (String)request.get("user_address");
        String user_type = (String)request.get("user_type");
        String user = redisUtils.get(token);
        String[] data = user.split(",");
        String user_phone_number = data[1];
        try {
            int type = 0;
            if (user_type.equals("成人")) {
                type = 1;
            }
            int gender = -1;
            if (user_gender.equals("女")) {
                gender = 0;
            } else if (user_gender.equals("男")) {
                gender = 1;
            }
            try {
               userService.UpdateUserInfe(user_real_name,user_email,type,gender,user_id_number,user_address,user_phone_number);
                return new RespBean(1, "修改成功");
            } catch (Exception e) {
                return new RespBean(403, "修改失败");
            }

        } catch (Exception e) {
            return new RespBean(405,"修改失败");
        }


    }

    /**
     *
     * 修改密码的接口
     * 对应前端的 changePassword请求
     */
    @RequestMapping(value ="/changepassword",method = RequestMethod.POST)
    public RespBean ChangePassword(@Valid @RequestBody Map<String,Object> request) {

        String token = (String)request.get("token");
        String user_old_password = (String)request.get("user_old_password");
        String user_new_password = (String)request.get("user_new_password");
        String user = redisUtils.get(token);
        String[] data = user.split(",");
        String user_phone_number = data[1];

        User userInfo = userService.selectUserInfo(user_phone_number);
            if(userInfo.getUser_password().equals(user_old_password))
            {
                userService.UpdatePassword(user_new_password,user_phone_number);
                return new RespBean(1," 修改成功");
            }
        return new RespBean(405,"修改失败");
    }


    /**
     * 管理员登陆
     */
    @RequestMapping(value ="/adminLogin",method = RequestMethod.POST)
    public RespBean AdminLogin(@Valid @RequestBody Map<String,Object> request) {

        String username = (String) request.get("user_name");
        String password = (String) request.get("password");

        try {
            List<User> users = userService.selectAllUser();
            for (User user : users) {
                if (user.getUser_phone_number().equals(username)  && user.getUser_password().equals(password) && user.getUser_type() ==-1 ) {
                    //token生成  用户信息redis缓存
                    String token =generateToken(user);

                    /*
                     * 将用户登陆信息存入token中
                     */
                    redisUtils.set(user.getUser_phone_number()+"msbfajshbadsmnfbasmfa"+user.getUser_password(),token);

                    return new RespBean(1,user.getUser_phone_number()+"msbfajshbadsmnfbasmfa"+user.getUser_password());

                }
            }

        } catch(Exception e) {
            logger.info("登录失败");
            return new RespBean(404, "失败");
        }
        return new RespBean(404, "失败");
    }


    /**
     * 获取所有用户
     */
    @RequestMapping(value ="/getAllUser",method = RequestMethod.GET)
    public GetAllUserReturnData getAllUser(@RequestParam String token) {
        try {
            String a = redisUtils.get(token);
            if(a != null) {
                List<User> userList = userService.selectAllUser();
                    return  new GetAllUserReturnData(1,userList);

            }

        } catch (Exception e) {
            return  new GetAllUserReturnData(404,null);

                  }
        return  new GetAllUserReturnData(404,null);
    }


    @RequestMapping(value ="/getAllPassenger",method = RequestMethod.GET)
    public PassengerInfoReturnData getAllPassenger(@RequestParam String token) {
        try {
            String a = redisUtils.get(token);
            if(a != null) {
               List<PassengerInfo> passengerInfoList = passengerService.searchAllPassenger();
                    return new PassengerInfoReturnData(1,passengerInfoList);
            }

        } catch (Exception e) {
            return new PassengerInfoReturnData(404,null);
        }
        return new PassengerInfoReturnData(404,null);
    }


    @RequestMapping(value ="/deleteUser",method = RequestMethod.GET)
    public RespBean deleteUser(@RequestParam String user_phone_number) {
        try {
            userService.deleteUser(user_phone_number);
            return new RespBean(1,"删除成功");
        } catch (Exception e) {
            return new RespBean(404,"删除失败");
        }

    }

    public RespBean saveToken(User user,UserLogin userlogin){
        String token =generateToken(user);
        /*
         * 将用户登陆信息存入token中
         */
        redisUtils.set(userlogin.getUser_phone_number()+"msbfajshbadsmnfbasmfa"+userlogin.getUser_password(),token);
        return new RespBean(1,userlogin.getUser_phone_number()+"msbfajshbadsmnfbasmfa"+userlogin.getUser_password());
    }

    /**
     * 根据用户信息生成token
     */
    public String generateToken(User user){
        return user.getUser_real_name()+","
                +user.getUser_phone_number()+","
                +user.getUser_email()+","
                +user.getUser_type()+","
                +user.getUser_gender() +","
                +user.getUser_id_number()+","
                +user.getUser_address();
    }

}
