package edu.yogi.web.controller;

import static org.hamcrest.Matchers.hasProperty;
import static org.hamcrest.Matchers.is;
import static org.hamcrest.Matchers.nullValue;
import static org.mockito.Mockito.reset;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.verifyNoMoreInteractions;
import static org.mockito.Mockito.verifyZeroInteractions;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.forwardedUrl;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.model;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.view;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import edu.yogi.web.service.IService;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {"file:src\\test\\webapp\\spring-test-servlet.xml"}) 
@WebAppConfiguration
public class HomeControllerTest {

	private MockMvc mockMvc;

	@Autowired
	private IService service;

	@Autowired
	private WebApplicationContext webApplicationContext;

	@Before
	public void setUp() {
		/*mockMvc = MockMvcBuilders.standaloneSetup(new HomeController())
				.setViewResolvers(viewResolver).build();*/

		reset(service);
		mockMvc = MockMvcBuilders.webAppContextSetup(webApplicationContext).build();
	}

	@Test
	public void validateContext() {
		Assert.assertNotNull(service);

		verifyNoMoreInteractions(service);
	}

	@Test
	public void home() throws Exception {

		mockMvc.perform(get("/home"))
		.andExpect(status().isOk())
		.andExpect(view().name("home"))
		.andExpect(forwardedUrl("/WEB-INF/jsp/home.jsp"))
		.andExpect(model().attribute("data", "Hello Spring !!!"));

		verifyNoMoreInteractions(service);
	}

	@Test
	public void mathAdd() throws Exception {
		int num1 = 1, num2 = 7, res = 2;
		when(service.addNum(num1, num2)).thenReturn(res);

		String data = String.format("%s + %s = %s", num1, num2, res);

		mockMvc.perform(get("/home/math/add").param("num1", num1+"").param("num2", num2+""))
		.andExpect(status().isOk())
		.andExpect(view().name("home"))
		.andExpect(forwardedUrl("/WEB-INF/jsp/home.jsp"))
		.andExpect(model().attribute("data", data));

		verify(service, times(1)).addNum(num1, num2);
		verifyNoMoreInteractions(service);
	}

	@Test
	public void addDocWithValidationError() throws Exception {

		String title = "12345678910";
		String description = "1234567891012345678910123456789101234567891012345678910";

		mockMvc.perform(post("/todo/add")
				.contentType(MediaType.APPLICATION_FORM_URLENCODED)
				.param("description", description)
				.param("title", title)
				)
				.andExpect(status().isOk())
				.andExpect(view().name("todo/add"))
				.andExpect(forwardedUrl("/WEB-INF/jsp/todo/add.jsp"))
				.andExpect(model().attributeHasFieldErrors("todo", "title"))
				.andExpect(model().attributeHasFieldErrors("todo", "description"))
				.andExpect(model().attribute("todo", hasProperty("id", nullValue())))
				.andExpect(model().attribute("todo", hasProperty("description", is(description))))
				.andExpect(model().attribute("todo", hasProperty("title", is(title))));

		verifyZeroInteractions(service);
	}



}
