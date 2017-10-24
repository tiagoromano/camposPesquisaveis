import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.autoconfigure.orm.jpa.HibernateJpaAutoConfiguration;
import org.springframework.boot.context.web.SpringBootServletInitializer;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {
	"cronapp.framework.authentication.normal",
	"cronapp.framework.authentication.security",
	"cronapp.framework.rest",
	"auth.permission",
	"api.rest.events",
	"api.rest.webservices",
	"reports",
	"cronapi",
	"blockly",
	"app"
})
@EnableAutoConfiguration(exclude = { DataSourceAutoConfiguration.class, HibernateJpaAutoConfiguration.class })
public class SpringBootMain extends SpringBootServletInitializer {

	public static void main(String[] args) {
		SpringApplication.run(SpringBootMain.class, args);
	}

}
