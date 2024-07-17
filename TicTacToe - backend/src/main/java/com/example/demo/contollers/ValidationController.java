package com.example.demo.contollers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.service.impl.ValidationService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/validation")
public class ValidationController {
	@Autowired
	private ValidationService validationservice;
	@GetMapping("/name")
	public String validateName(@RequestParam(value ="name"/*, defaultValue = "World"*/)String name) {
			return validationservice.name(name);
		
	}
	
	}