package com.okta.sociallogin.login.web;

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

    @GetMapping(path = "/privatescope")
    public String privateController(){
        return "you are now authorized";
    }
}
