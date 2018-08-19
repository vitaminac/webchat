package com.core.web.controller;

import org.springframework.core.annotation.AliasFor;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RequestMapping;

import java.lang.annotation.Documented;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

import static com.core.web.util.PathMappingConstants.API_BASE_PATH;

@Target({ElementType.TYPE})
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Component
@RequestMapping(API_BASE_PATH)
public @interface ApiController {
    @AliasFor(annotation = Component.class)
    String value() default "";
}