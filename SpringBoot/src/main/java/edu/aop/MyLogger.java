package edu.aop;

import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class MyLogger {
    private static final Logger LOGGER = LoggerFactory.getLogger(MyLogger.class);
    
    @Before("execution(* edu.controller.UserController.*(..)) && args(id)")
    public void beforeSampleCreation(long id) {
        LOGGER.info("A request was issued for a sample name: " + id);
    }
}
