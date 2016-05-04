/*package com.edu.config;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurationSupport;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.ObjectMapper;

//@Configuration
public class WebConfig extends WebMvcConfigurationSupport {

    @Autowired
    ObjectMapper objectMapper;

    @Override
    protected void configureMessageConverters(List<HttpMessageConverter<?>> converters) {
    	objectMapper.setSerializationInclusion(Include.NON_NULL);
    	converters.add(new MappingJackson2HttpMessageConverter(objectMapper));
    }
} 
*/