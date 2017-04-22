package in.sdqali.spring.csrf.config;

import static in.sdqali.spring.csrf.auth.filter.CsrfGrantingFilter.X_XSRF_TOKEN;

import javax.servlet.Filter;
import javax.servlet.http.HttpServletRequest;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.access.intercept.FilterSecurityInterceptor;
import org.springframework.security.web.csrf.CsrfFilter;
import org.springframework.security.web.csrf.CsrfTokenRepository;
import org.springframework.security.web.csrf.HttpSessionCsrfTokenRepository;
import org.springframework.security.web.util.matcher.RequestMatcher;
import org.springframework.session.MapSessionRepository;
import org.springframework.session.SessionRepository;
import org.springframework.session.web.http.HeaderHttpSessionStrategy;

import in.sdqali.spring.csrf.auth.filter.CsrfGrantingFilter;
import in.sdqali.spring.csrf.auth.matcher.NoAntPathRequestMatcher;

@EnableWebSecurity
@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		String[] patterns = new String[] { "/", "/login", "/bower_components/**/*", "/app/**/*", "/index.html", "/home.html",
				"/signin.html", "/favicon.ico" };

		/*
		 * http 
		 * .authorizeRequests() 
		 * .antMatchers(patterns) 
		 * .permitAll()
		 * .antMatchers("/hello/**") 
		 * .hasRole("USER") .and() .csrf() .disable()
		 * .httpBasic() .and() .addFilterAfter(csrfFilter(patterns),
		 * FilterSecurityInterceptor.class) .addFilterAfter(new
		 * CsrfGrantingFilter(), CsrfFilter.class);
		 */

		http
		.csrf()
		.csrfTokenRepository(csrfTokenRepository())
		.requireCsrfProtectionMatcher(getRequestMatcher())
		.and()
		.addFilterAfter(csrfFilter(patterns), FilterSecurityInterceptor.class)
		.addFilterAfter(new CsrfGrantingFilter(), CsrfFilter.class);

	}

	private RequestMatcher getRequestMatcher() {
		return new RequestMatcher() {
			@Override
			public boolean matches(HttpServletRequest request) {
				if (request.getRequestURL().indexOf("hello") != -1) {
					return true;
				}
				return false;
			}
		};
	}

	private Filter csrfFilter(String[] patterns) {
		CsrfFilter csrfFilter = new CsrfFilter(csrfTokenRepository());
		csrfFilter.setRequireCsrfProtectionMatcher(csrfProtectionMatcher(patterns));
		return csrfFilter;
	}

	private NoAntPathRequestMatcher csrfProtectionMatcher(String[] patterns) {
		return new NoAntPathRequestMatcher(patterns);
	}

	private CsrfTokenRepository csrfTokenRepository() {
		HttpSessionCsrfTokenRepository repository = new HttpSessionCsrfTokenRepository();
		repository.setHeaderName(X_XSRF_TOKEN);
		return repository;
	}

	/*
	 * @Autowired public void configureGlobal(AuthenticationManagerBuilder auth)
	 * throws Exception { auth .inMemoryAuthentication()
	 * .withUser("user").password("password").roles("USER"); }
	 */

	/*@Bean
	public SessionRepository sessionRepository() {
		return new MapSessionRepository();
	}

	@Bean
	public HeaderHttpSessionStrategy sessionStrategy() {
		return new HeaderHttpSessionStrategy();
	}*/
}
