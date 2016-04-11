package edu.yogi.web.service.impl;

import java.util.HashMap;
import java.util.Map;

import org.apache.log4j.BasicConfigurator;
import org.apache.log4j.Logger;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;

import edu.yogi.web.domain.RestResponse;
import edu.yogi.web.domain.User;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {"file:src\\test\\webapp\\spring-test-http-client-servlet.xml"}) 
public class HttpClientServiceTest {

	private static final Logger LOG = Logger.getLogger(HttpClientServiceTest.class);

	@Autowired
	private HttpClientService restTemplate;

	@Before
	public void setUp() {
		BasicConfigurator.configure();
	}

	@Test
	public void testGet() {
		try {
			String url = "http://ykumar-dl-in:8080/spring4/rest/user";

			RestResponse res = restTemplate.getData(url, RestResponse.class);
			System.out.println(BusinessJSONUtility.serialize(res));
		} catch (Exception e) {
			Assert.fail(e.getMessage());
			LOG.error(e.getMessage(), e);
		}
	}

	@Test
	public void testGetWithParam() {
		try {
			String url = "http://ykumar-dl-in:8080/spring4";
			String method = "rest/updateUser";
			Map<String, String> params = new HashMap<String, String>();
			params.put("fName", "First");
			params.put("lName", "Last");
			params.put("email", "user@email.com");

			RestResponse res = restTemplate.getData(url, method, params, RestResponse.class);
			System.out.println(BusinessJSONUtility.serialize(res));
		} catch (Exception e) {
			Assert.fail(e.getMessage());
			LOG.error(e.getMessage(), e);
		}
	}
	
	@Test
	public void testPostWithParam() {
		try {
			String url = "http://ykumar-dl-in:8080/spring4";
			String method = "rest/updateUser";
			MultiValueMap<String, String> params = new LinkedMultiValueMap<String, String>();
			params.add("fName", "First");
			params.add("lName", "Last");
			params.add("email", "user@email.com");

			RestResponse res = restTemplate.postData(url, method, params, RestResponse.class);
			System.out.println(BusinessJSONUtility.serialize(res));
		} catch (Exception e) {
			Assert.fail(e.getMessage());
			LOG.error(e.getMessage(), e);
		}
	}
	
	/*@Test
	public void testPostWithReqBody() {
		try {
			String url = "http://ykumar-dl-in:8080/spring4";
			String method = "rest/updateUserReqBody";
			
			User user = new User();
			user.setEmail("user@email.com");
			user.setFirstName("First");
			user.setLastName("Last");
			
			RestResponse res = restTemplate.postData(url, method, user, RestResponse.class);
			System.out.println(BusinessJSONUtility.serialize(res));
		} catch (Exception e) {
			Assert.fail(e.getMessage());
			LOG.error(e.getMessage(), e);
		}
	}*/
	
	@Test
	public void testPostWithReqBody1() {
		try {
			String url = "http://ykumar-dl-in:8080/spring4";
			String method = "rest/updateUserReqBody";
			
			User user = new User();
			user.setEmail("user@email.com");
			user.setFirstName("First");
			user.setLastName("Last");
			
			RestResponse res = restTemplate.postDataInReqBody(url, method, user, RestResponse.class);
			System.out.println(BusinessJSONUtility.serialize(res));
		} catch (Exception e) {
			Assert.fail(e.getMessage());
			LOG.error(e.getMessage(), e);
		}
	}

}
