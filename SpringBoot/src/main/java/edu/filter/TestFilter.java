package edu.filter;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class TestFilter implements Filter {
	private static final Logger LOG = LoggerFactory.getLogger(TestFilter.class);
	
	@Override
	public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain) throws IOException, ServletException {
		HttpServletRequest hreq = (HttpServletRequest) req;
		
		LOG.info("Start Request: " + hreq.getRequestURI() + " :: " + hreq.getRequestURL());
		
		chain.doFilter(req, res);
		
		LOG.info("Done Request: " + hreq.getRequestURI() + " :: " + hreq.getRequestURL() + " :: " + hreq.getAttribute("myPage"));
	}

	@Override
	public void init(FilterConfig arg0) throws ServletException {
	}
	
	@Override
	public void destroy() {
	}

}
