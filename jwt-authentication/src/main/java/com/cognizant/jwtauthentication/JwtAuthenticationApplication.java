package com.cognizant.jwtauthentication;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class JwtAuthenticationApplication {

    private static final Logger LOGGER =
            LoggerFactory.getLogger(JwtAuthenticationApplication.class);

    public static void main(String[] args) {

        SpringApplication.run(JwtAuthenticationApplication.class, args);

        LOGGER.info("Inside main");
    }
}