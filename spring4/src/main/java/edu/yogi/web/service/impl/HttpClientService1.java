package edu.yogi.web.service.impl;

import org.apache.http.HttpEntity;
import org.apache.http.client.config.RequestConfig;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.impl.conn.PoolingHttpClientConnectionManager;
import org.apache.http.util.EntityUtils;

public class HttpClientService1 {

	private static CloseableHttpClient httpclient = null;
	static {
		RequestConfig requestConfig = RequestConfig.custom().setConnectionRequestTimeout(1000).setConnectTimeout(1000)
				.setSocketTimeout(1000).build();

		PoolingHttpClientConnectionManager cm = new PoolingHttpClientConnectionManager();
		cm.setDefaultMaxPerRoute(10);
		cm.setMaxTotal(100);

		httpclient = HttpClients.custom().setDefaultRequestConfig(requestConfig).setConnectionManager(cm).build();
	}

	public static void main(String[] args) throws Exception {
		try {

			get("http://localhost:8080/spring4/home");
			post("http://localhost:8080/spring4/home");

		} finally {
			httpclient.close();
		}
	}

	private static void get(String url) throws Exception {
		HttpGet httpget = new HttpGet(url);
		/*RequestConfig requestConfig = RequestConfig.custom().setConnectionRequestTimeout(1000).setConnectTimeout(1000)
				.setSocketTimeout(1000).build();
		httpget.setConfig(requestConfig);*/

		CloseableHttpResponse res = httpclient.execute(httpget);
		try {
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
		
		CloseableHttpResponse res = httpclient.execute(httpPost);
		try {
			HttpEntity entity = res.getEntity();
			if (entity != null) {
				String result = EntityUtils.toString(entity, "UTF-8");
				System.out.println(result);
			}
		} finally {
			res.close();
		}
	}

}
