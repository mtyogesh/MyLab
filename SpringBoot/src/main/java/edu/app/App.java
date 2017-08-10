package edu.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@EnableAutoConfiguration
@ComponentScan("edu.app,edu.controller,edu.aop")
public class App {
    public static void main(String[] args) throws Exception {
        SpringApplication.run(App.class, args);
    }

}