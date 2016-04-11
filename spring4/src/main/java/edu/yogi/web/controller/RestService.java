package edu.yogi.web.controller;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import edu.yogi.web.domain.RestResponse;
import edu.yogi.web.domain.User;
import edu.yogi.web.service.impl.BusinessJSONUtility;

@RestController
@RequestMapping("/rest")
public class RestService {

	@RequestMapping(value = "/user", method = RequestMethod.GET)
	public RestResponse<User> getUser() {
		RestResponse<User> res = new RestResponse<User>();
		
		User user = new User();
		user.setId(1);
		user.setEmail("ykumar@firstrain.com");
		user.setFirstName("Yogesh");
		user.setLastName("Kumar");
		
		res.setData(user);
		res.setMessage("response success");
		res.setStatus("ERROR");
		
		return res;
	}
	
	@RequestMapping(value = "/updateUser", method = {RequestMethod.GET, RequestMethod.POST})
	public RestResponse<User> updateUser(
			@RequestParam("email") String email,
			@RequestParam("fName") String fName,
			@RequestParam("lName") String lName) {
		RestResponse<User> res = new RestResponse<User>();
		
		User user = new User();
		user.setId(1);
		user.setEmail(email);
		user.setFirstName(fName);
		user.setLastName(lName);
		
		res.setData(user);
		res.setMessage("response success");
		res.setStatus("SUCCESS");
		
		return res;
	}
	
	@RequestMapping(value = "/updateUserReqBody", method = RequestMethod.POST)
	public RestResponse<User> updateUserReqBody(@RequestBody User userIn) throws Exception {
		
		RestResponse<User> res = new RestResponse<User>();
		
		User user = new User();
		user.setId(1);
		user.setEmail(userIn.getEmail());
		user.setFirstName(userIn.getFirstName());
		user.setLastName(userIn.getLastName());
		
		res.setData(user);
		res.setMessage("response success");
		res.setStatus("SUCCESS");
		
		return res;
	}
	
	@RequestMapping(value = "/{id}/user", method = RequestMethod.GET)
	public RestResponse<User> getUser(@PathVariable("id") long id) {
		RestResponse<User> res = new RestResponse<User>();
		
		User user = new User();
		user.setId(id);
		user.setEmail("ykumar@firstrain.com");
		user.setFirstName("Yogesh");
		user.setLastName("Kumar");
		
		res.setData(user);
		res.setMessage("response success");
		res.setStatus("SUCCESS");
		
		return res;
	}
	
	@RequestMapping(value = "/{id}/updateUserReqBody", method = RequestMethod.POST)
	public RestResponse<User> updateUserReqBody(@PathVariable("id") long id, @RequestBody User userIn) throws Exception {
		
		RestResponse<User> res = new RestResponse<User>();
		
		User user = new User();
		user.setId(id);
		user.setEmail(userIn.getEmail());
		user.setFirstName(userIn.getFirstName());
		user.setLastName(userIn.getLastName());
		
		res.setData(user);
		res.setMessage("response success");
		res.setStatus("SUCCESS");
		
		return res;
	}
	
	
}
