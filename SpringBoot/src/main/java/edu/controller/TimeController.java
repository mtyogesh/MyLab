package edu.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/time")
public class TimeController {

	@RequestMapping("")
	public String time(@RequestParam("id") Long id) {
		if(id != null && id == 2) {
			return "forward:/WEB-INF/pages/time2.jsp";
		}
		return "time1";
	}
}
