package edu.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import edu.bean.output.User;

@RestController
@RequestMapping("/user")
public class UserController {
	
	@RequestMapping("")
	public User getUser(@RequestParam("id") long id) {
		User user = new User();
		user.setId(id);
		user.setFirstName("Yogesh");
		user.setLastName("Kumar");
		
		return user;
	}
}
