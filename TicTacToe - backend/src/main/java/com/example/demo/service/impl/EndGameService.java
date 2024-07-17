package com.example.demo.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.demo.model.PobjedaInformacije;



public interface EndGameService {
	public PobjedaInformacije pobjeda(@RequestBody List<String> board/*, defaultValue = "World"*/);
}
