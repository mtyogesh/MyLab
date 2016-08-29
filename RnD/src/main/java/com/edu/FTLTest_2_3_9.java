package com.edu;

import java.io.File;
import java.io.StringWriter;
import java.util.HashMap;

import freemarker.template.Configuration;
import freemarker.template.Template;

public class FTLTest_2_3_9 {

	private static Configuration config = null;

	static {
		try {
			config = new Configuration();
			config.setDirectoryForTemplateLoading(new File("src/main/resources/template"));
			config.setOutputEncoding("UTF-8");
			config.setDefaultEncoding("UTF-8");
			config.setNumberFormat("###################");
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	
	public static void main(String[] args) throws Exception {
		
		Template template = config.getTemplate("t1_2_3_9.ftl");
		
		StringWriter writer = new StringWriter();
		template.process(new HashMap<String, Object>(), writer);
		System.out.println(writer);
		
		
	}

}
