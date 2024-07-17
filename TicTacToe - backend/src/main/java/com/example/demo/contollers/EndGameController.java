package com.example.demo.contollers;
import com.example.demo.service.impl.EndGameService;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.PobjedaInformacije;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/check")
public class EndGameController {
	@Autowired
	private EndGameService endgameservice;
	@PostMapping("/pobjeda")
	public PobjedaInformacije pobjeda(@RequestBody List<String> board/*, defaultValue = "World"*/) {
		return endgameservice.pobjeda(board);
	}
	}
