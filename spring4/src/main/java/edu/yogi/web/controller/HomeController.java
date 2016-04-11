package edu.yogi.web.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import edu.yogi.web.domain.Doc;
import edu.yogi.web.form.DocForm;
import edu.yogi.web.service.IService;

@Controller
@RequestMapping("/home")
public class HomeController {

	@Autowired
	private IService service;
	
	@RequestMapping(method = RequestMethod.GET)
	public String home(Model model) {
		model.addAttribute("data", "Hello Spring !!!");
		return "home";
	}
	
	@RequestMapping("/math/add")
	public String mathAdd(Model model, @RequestParam("num1") int num1, @RequestParam("num2") int num2) {
		
		String data = String.format("%d + %d = %d", num1, num2, service.addNum(num1, num2));
		model.addAttribute("data", data);
		return "home";
	}
	
	@RequestMapping(value = "/addDoc", method = RequestMethod.POST)
	public String addDoc(@Valid @ModelAttribute("todo") DocForm form, BindingResult result, RedirectAttributes attributes) {
		if (result.hasErrors()) {
			return "todo/add";
		}
		Doc doc = service.addDoc(form);
		attributes.addFlashAttribute("feedbackMessage", "Object added: " + doc.getTitle());
		attributes.addAttribute("id", doc.getId());

		return "redirect:todo/view";
	}
}
