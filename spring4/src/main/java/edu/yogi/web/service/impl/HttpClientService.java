package edu.yogi.web.service.impl;

import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.io.UnsupportedEncodingException;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.URLEncoder;
import java.util.Map;

import org.apache.http.Consts;
import org.apache.http.Header;
import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.message.BasicHeader;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

@Service
@Lazy
public class HttpClientService {

	private static final Logger LOG = Logger.getLogger(HttpClientService.class);

	@Autowired
	private RestTemplate restTemplate;

	@Qualifier("httpClient")
	@Autowired
	private HttpClient httpClient;

	public <T> T getData(String url, String method, Map<String, String> params, Class<T> responseType) throws Exception {
		URI uri = buildURI(url + "/" + method, params);
		return getData(uri, responseType, method);
	}

	public <T> T getData(String url, Class<T> responseType) throws Exception {
		return getData(new URI(url), responseType, url);
	}

	private <T> T getData(URI uri, Class<T> responseType, String activity) throws Exception {
		try {
			T t = restTemplate.getForObject(uri, responseType);
			ensureResponseStatus(t);
			LOG.info("Serving data from service GET: " + uri);
			return t;
		} catch (Exception e) {
			LOG.error("Service Error GET: " + uri, e);
			throw e;
		} finally {
		}
	}

	public <T> T postData(String url, String method, MultiValueMap<String, String> params, Class<T> responseType) throws Exception {
		try {
			T t = restTemplate.postForObject(url + "/" + method, params, responseType);
			ensureResponseStatus(t);
			LOG.info("Serving data from service POST: " + url + "/" + method);
			return t;
		} catch (Exception e) {
			LOG.error("Service Error POST: " + url + "/" + method, e);
			throw e;
		} finally {
		}
	}

	public <T> T postData(String url, String method, Object reqBean, Class<T> responseType) throws Exception {
		try {
			T t = restTemplate.postForObject(url + "/" + method, reqBean, responseType);
			ensureResponseStatus(t);
			LOG.info("Serving data from service POST: " + url + "/" + method);
			return t;
		} catch (Exception e) {
			LOG.error("Service Error POST: " + url + "/" + method, e);
			throw e;
		} finally {
		}
	}

	public String postDataInReqBody(String url, String reqBody, Header... headers) throws Exception {
		String result = null;
		HttpPost request = null;
		try {
			request = new HttpPost(url);
			if(headers != null) {
				for(Header hd : headers) {
					request.addHeader(hd);
				}
			}
			HttpEntity he = new StringEntity(reqBody, Consts.UTF_8);
			request.setEntity(he);
			HttpResponse response = httpClient.execute(request);
			HttpEntity resEntity = response.getEntity();
			if(resEntity != null) {
				InputStream in = resEntity.getContent();
				ByteArrayOutputStream out = new ByteArrayOutputStream();
				byte[] buffer = new byte[1024 * 10];
				int n = 0;
				while( (n = in.read(buffer)) > -1) {
					out.write(buffer, 0, n);
				}
				result = new String(out.toByteArray());
			}
		} catch (Exception e) {
			LOG.error("Error while getting data for: " + url + " :: " + reqBody, e);
			throw e;
		} finally {
			if(request != null) {
				request.releaseConnection();
			}
		}
		return result;
	}

	public String postDataInReqBody(String url, String method, String reqBody, Header... headers) throws Exception {
		String result = null;
		HttpPost request = null;
		try {
			url = url + "/" + method;
			request = new HttpPost(url);
			if(headers != null) {
				for(Header hd : headers) {
					request.addHeader(hd);
				}
			}
			HttpEntity he = new StringEntity(reqBody, Consts.UTF_8);
			request.setEntity(he);
			HttpResponse response = httpClient.execute(request);
			HttpEntity resEntity = response.getEntity();
			if(resEntity != null) {
				InputStream in = resEntity.getContent();
				ByteArrayOutputStream out = new ByteArrayOutputStream();
				byte[] buffer = new byte[1024 * 10];
				int n = 0;
				while( (n = in.read(buffer)) > -1) {
					out.write(buffer, 0, n);
				}
				result = new String(out.toByteArray());
			}
		} catch (Exception e) {
			LOG.error("Error while getting data for: " + url + " :: " + reqBody, e);
			throw e;
		} finally {
			if(request != null) {
				request.releaseConnection();
			}
		}
		return result;
	}

	public <T> T postDataInReqBody(String url, String method, Object reqBean, Class<T> responseType) throws Exception {
		HttpPost request = null;
		String reqBody = null;
		try {
			url = url + "/" + method;
			request = new HttpPost(url);
			request.addHeader(new BasicHeader("Accept", "application/json"));
			reqBody = BusinessJSONUtility.serialize(reqBean);
			HttpEntity he = new StringEntity(reqBody, Consts.UTF_8);
			request.setEntity(he);
			HttpResponse response = httpClient.execute(request);
			HttpEntity resEntity = response.getEntity();
			if(resEntity != null) {
				InputStream in = resEntity.getContent();
				ByteArrayOutputStream out = new ByteArrayOutputStream();
				byte[] buffer = new byte[1024 * 10];
				int n = 0;
				while( (n = in.read(buffer)) > -1) {
					out.write(buffer, 0, n);
				}
				T t = BusinessJSONUtility.deserialize(new String(out.toByteArray()), responseType);
				ensureResponseStatus(t);
				LOG.info("Serving data from service POST: " + url + " :: reqBody: " + reqBody);
				return t;
			}
		} catch (Exception e) {
			LOG.error("Error while getting data for: " + url + " :: reqBody: " + reqBody, e);
			throw e;
		} finally {
			if(request != null) {
				request.releaseConnection();
			}
		}
		return null;
	}

	private URI buildURI(String url, Map<String, String> urlVariables) throws URISyntaxException, UnsupportedEncodingException {
		if(urlVariables != null && !urlVariables.isEmpty()) {
			StringBuilder sb = new StringBuilder(url); 
			char sep = url.indexOf('?') == -1 ? '?' : '&';
			for(Map.Entry<String, String> entry : urlVariables.entrySet()) {
				if(entry.getValue() == null) {
					continue;
				}
				sb.append(sep).append(entry.getKey()).append('=').append(URLEncoder.encode(entry.getValue(), "UTF-8"));
				if(sep != '&') {
					sep = '&';
				}
			}
			url = sb.toString();
		}
		return new URI(url);
	}

	private <T> void ensureResponseStatus(T responseType) throws Exception {

	}

}
