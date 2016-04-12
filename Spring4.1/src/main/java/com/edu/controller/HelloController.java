package com.edu.controller;

import org.springframework.web.bind.annotation.RestController;

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
    	
    	return data;
    }

}
