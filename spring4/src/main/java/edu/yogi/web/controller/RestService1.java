package edu.yogi.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import edu.yogi.web.domain.RestResponse;
import edu.yogi.web.domain.User;

@Controller
@RequestMapping("/rest1")
public class RestService1 {

	@RequestMapping("/user")
	public RestResponse<User> getUser() {
		RestResponse<User> res = new RestResponse<User>();
		
		User user = new User();
		user.setId(1);
		user.setEmail("ykumar@firstrain.com");
		user.setFirstName("Yogesh");
		user.setLastName("Kumar");
		
		res.setData(user);
		res.setMessage("response success");
		res.setStatus("SUCCESS");
		
		return res;
	}
	
	@RequestMapping("/user1")
	public RestResponse<User> getUser1() {
		RestResponse<User> res = new RestResponse<User>();
		
		User user = new User();
		user.setId(1);
		user.setEmail("ykumar@firstrain.com");
		user.setFirstName("Yogesh");
		user.setLastName("Kumar");
		
		res.setData(user);
		res.setMessage("response success");
		res.setStatus("SUCCESS");
		
		return res;
	}
}
