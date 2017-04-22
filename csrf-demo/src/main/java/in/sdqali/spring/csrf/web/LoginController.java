package in.sdqali.spring.csrf.web;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;
import static org.springframework.web.bind.annotation.RequestMethod.POST;

import java.util.Collections;
import java.util.Map;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/login")
public class LoginController {
  @RequestMapping(method = POST,
      path = "",
      produces = APPLICATION_JSON_VALUE)
  public Map<String, Object> login(@RequestBody Map<String, Object> params) {
    return Collections.singletonMap("user", params.get("username"));
  }
}
