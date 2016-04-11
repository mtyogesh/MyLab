package edu.yogi.web.service.impl;

import java.io.File;
import java.io.IOException;
import java.io.Reader;

import javax.annotation.PostConstruct;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Value;

import freemarker.cache.TemplateLoader;
import freemarker.template.Configuration;
import freemarker.template.Template;

public class FreemarkerTemplates {
	private final Logger LOG = Logger.getLogger(FreemarkerTemplates.class);
	private Configuration config = null;
	
	@Value("${ftl.template.path}")
	private String ftlTemplatePath;
	
	@PostConstruct
	public void init() {
		init(new File(ftlTemplatePath));
	}
	
	public void init(File template) {
		try {
			config = new Configuration(Configuration.VERSION_2_3_22);
			config.setDirectoryForTemplateLoading(template);
			//config.setTemplateLoader(new TemplateLoader);
			config.setOutputEncoding("UTF-8");
			config.setDefaultEncoding("UTF-8");
			config.setNumberFormat("###################");
			
		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
		}
	}
	
	public Template getTemplate(String name) {
		if(config == null) {
			throw new IllegalStateException("Please call init method first.");
		}
		Template template =  null;
		try {
			template  = config.getTemplate(name);
		} catch (IOException e) {
			LOG.error(e.getMessage(), e);
		}
		return template; 
	}
	
}
