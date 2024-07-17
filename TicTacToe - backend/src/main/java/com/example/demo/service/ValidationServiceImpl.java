package com.example.demo.service;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.demo.service.impl.ValidationService;

@Service
public class ValidationServiceImpl implements ValidationService {

	public String name(@RequestParam(value ="name"/*, defaultValue = "World"*/)String name) {
		System.out.println("Ime je primljeno: " + name);
		System.out.println(name.trim().length());
		System.out.println(name.length() );	
		if(name.replaceAll(" ","").length()==0) {
			return "Ime ne smije biti prazno";
		}
		else if(name.length()>15) {
			return "Ime ne smije biti duže od 15 znakova!";
		}
		else if(name.length()<4) {
			return "Ime ne smje biti kraće od 4 zankova!";
		}
		else if(name.matches(".*\\d.*")) {
			return "Ime ne smije sadržavati brojeve!";
		}
		
		return name;
				
		
	}
	

}
