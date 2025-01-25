package com.okta.sociallogin.web.login;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/okta")
public class LoginController {

    @GetMapping(path = "/login")
    public String basicController(){
        return "user logged in";
    }

}
