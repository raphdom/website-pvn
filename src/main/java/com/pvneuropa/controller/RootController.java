package com.pvneuropa.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.i18n.SessionLocaleResolver;

import javax.servlet.http.HttpServletRequest;

/**
 * Created by Raphael on 07/06/2016.
 */
@Controller
public class RootController {

    @RequestMapping(value = "/",  method= RequestMethod.GET)
    public ModelAndView root(HttpServletRequest request) {

        String lang = request.getParameter("lang");
        if (lang == null || lang.trim().equals("")){
            if (request.getSession().getAttribute(SessionLocaleResolver.LOCALE_SESSION_ATTRIBUTE_NAME)== null) {
                request.getSession().setAttribute(
                        SessionLocaleResolver.LOCALE_SESSION_ATTRIBUTE_NAME,
                        request.getLocale());
            }
        }

        return new ModelAndView("index");
    }

}
