package edu.interceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

public class TesInterceptor extends HandlerInterceptorAdapter {
	private static final Logger LOG = LoggerFactory.getLogger(TesInterceptor.class);

	@Override
	public boolean preHandle(HttpServletRequest req, HttpServletResponse res, Object arg2) throws Exception {
		LOG.info("preHandle Request: " + req.getRequestURI() + " :: " + req.getRequestURL());
		return true;
	}

	@Override
	public void postHandle(HttpServletRequest req, HttpServletResponse res, Object handler, ModelAndView modelAndView) throws Exception {
		LOG.info("postHandle Request: " + req.getRequestURI() + " :: " + req.getRequestURL() + " :: " + req.getAttribute("myPage"));
	}
	
	@Override
	public void afterCompletion(HttpServletRequest req, HttpServletResponse res, Object handler, Exception ex) throws Exception {
		LOG.info("afterCompletion Request: " + req.getRequestURI() + " :: " + req.getRequestURL() + " :: " + req.getAttribute("myPage"));
	}

}
