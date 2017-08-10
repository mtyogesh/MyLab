package edu.yogi.web.filter;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;

import org.apache.log4j.Logger;


public class PerfFilter implements Filter {
	private static final Logger LOG = Logger.getLogger(PerfFilter.class);
	
	public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain) throws IOException, ServletException {
		HttpServletRequest hreq = (HttpServletRequest) req;
		
		LOG.info("Start Request: " + hreq.getRequestURI() + " :: " + hreq.getRequestURL());
		
		chain.doFilter(req, res);
		
		LOG.info("Done Request: " + hreq.getRequestURI() + " :: " + hreq.getRequestURL());
	}

	public void init(FilterConfig arg0) throws ServletException {
	}

	public void destroy() {
		// TODO Auto-generated method stub
		
	}
	
}
