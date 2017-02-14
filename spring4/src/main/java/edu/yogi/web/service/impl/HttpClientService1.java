package edu.yogi.web.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.http.Consts;
import org.apache.http.HttpEntity;
import org.apache.http.NameValuePair;
import org.apache.http.client.CookieStore;
import org.apache.http.client.config.RequestConfig;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.client.protocol.HttpClientContext;
import org.apache.http.cookie.Cookie;
import org.apache.http.entity.ContentType;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.impl.conn.PoolingHttpClientConnectionManager;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.util.EntityUtils;

public class HttpClientService1 {

	private static CloseableHttpClient httpclient = null;
	static {
		RequestConfig requestConfig = RequestConfig.custom().setConnectionRequestTimeout(100000).setConnectTimeout(100000)
				.setSocketTimeout(100000).build();

		PoolingHttpClientConnectionManager cm = new PoolingHttpClientConnectionManager();
		cm.setDefaultMaxPerRoute(10);
		cm.setMaxTotal(100);

		httpclient = HttpClients.custom().setDefaultRequestConfig(requestConfig).setConnectionManager(cm).build();
	}

	public static void main(String[] args) throws Exception {
		try {

			//get("http://localhost:8080/spring4/home");
			//post("https://env16app.firstrain.com/validateUser");
			postBody("https://id.wsj.com/auth/submitlogin.json");
		} finally {
			httpclient.close();
		}
	}

	private static void get(String url) throws Exception {
		System.out.println("\n\n **************************** ");
		System.out.println(url);
		HttpGet httpget = new HttpGet(url);
		/*RequestConfig requestConfig = RequestConfig.custom().setConnectionRequestTimeout(1000).setConnectTimeout(1000)
				.setSocketTimeout(1000).build();
		httpget.setConfig(requestConfig);*/

		HttpClientContext context = HttpClientContext.create();
		CloseableHttpResponse res = httpclient.execute(httpget, context);
		try {
			CookieStore cookieStore = context.getCookieStore();
			List<Cookie> cookies = cookieStore.getCookies();
			printCookie(cookies);
			
			HttpEntity entity = res.getEntity();
			if (entity != null) {
				String result = EntityUtils.toString(entity, "UTF-8");
				System.out.println(result);
			}
		} finally {
			res.close();
		}
	}

	private static void post(String url) throws Exception {
		HttpPost httpPost = new HttpPost(url);

		List<NameValuePair> nvps = new ArrayList<NameValuePair>();
		nvps.add(new BasicNameValuePair("email", "ykumar@firstrain.com"));
		nvps.add(new BasicNameValuePair("password", "frfr"));
		httpPost.setEntity(new UrlEncodedFormEntity(nvps, Consts.UTF_8));

		HttpClientContext context = HttpClientContext.create();
		CloseableHttpResponse res = httpclient.execute(httpPost, context);
		try {
			CookieStore cookieStore = context.getCookieStore();
			List<Cookie> cookies = cookieStore.getCookies();
			printCookie(cookies);

			HttpEntity entity = res.getEntity();
			if (entity != null) {
				String result = EntityUtils.toString(entity, "UTF-8");
				System.out.println(result);
			}
		} finally {
			res.close();
		}
	}
	
	
	private static void postBody(String url) throws Exception {
		System.out.println("\n\n **************************** ");
		System.out.println(url);
		
		HttpPost httpPost = new HttpPost(url);

		List<NameValuePair> nvps = new ArrayList<NameValuePair>();
		nvps.add(new BasicNameValuePair("email", "ykumar@firstrain.com"));
		nvps.add(new BasicNameValuePair("password", "frfr"));
		httpPost.setEntity(new UrlEncodedFormEntity(nvps, Consts.UTF_8));

		HttpClientContext context = HttpClientContext.create();
		
		Map<Object, Object> reqBean = new HashMap<Object, Object>();
		reqBean.put("username", "firstrain500");
		reqBean.put("password", "firstrain500");
		
		String reqBody = BusinessJSONUtility.serialize(reqBean);
		HttpEntity he = new StringEntity(reqBody, ContentType.APPLICATION_JSON);
		httpPost.setEntity(he);
		
		CloseableHttpResponse res = httpclient.execute(httpPost, context);
		try {
			CookieStore cookieStore = context.getCookieStore();
			List<Cookie> cookies = cookieStore.getCookies();
			printCookie(cookies);

			HttpEntity entity = res.getEntity();
			if (entity != null) {
				String result = EntityUtils.toString(entity, "UTF-8");
				System.out.println(result);
				try {
					Map map = BusinessJSONUtility.deserialize(result, Map.class);
					String nextUrl = (String) map.get("url");
					get(nextUrl);
				} catch(Exception e) { }
				
			}
		} finally {
			res.close();
		}
	}

	private static void printCookie(List<Cookie> cookies) {
		System.out.println("Cookies: --------------- ");
		if(cookies != null && !cookies.isEmpty()) {
			for(Cookie c : cookies) {
				System.out.println("\t" + c.getName() + ": " + c.getValue());
			}
		} else {
			System.out.println("\tNull/Empty");
		}
		System.out.println("\n ---------------- \n");
	}

}
