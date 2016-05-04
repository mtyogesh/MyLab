package com.edu.controller;

import org.springframework.web.bind.annotation.RestController;

import com.edu.domain.User;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.RequestMapping;

@RestController
public class HelloController {

    @RequestMapping("/")
    public String index() {
        return "Greetings from Spring Boot!";
    }
    
    @RequestMapping("/test")
    public Object test() {
        Map<String, Object> data = new HashMap<>();
    	data.put("name", "Yogesh Kumar");
    	data.put("age", 30);
    	data.put("status", true);
    	data.put("address", null);
    	
    	return data;
    }
    
    @RequestMapping("/test1")
    public User test1() {
    	User u = new User();
    	u.setName("Yogesh Kumar1");
    	u.setAge(31);
    	u.setActive(false);
    	return u;
    }

}
