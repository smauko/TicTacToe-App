package com.example.demo.service.impl;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;


public interface ValidationService {
	
	 String name(@RequestParam(value ="name"/*, defaultValue = "World"*/)String name);
	

}
