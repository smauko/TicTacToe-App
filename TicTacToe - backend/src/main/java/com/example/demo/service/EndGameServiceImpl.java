package com.example.demo.service;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.demo.model.PobjedaInformacije;
import com.example.demo.service.impl.EndGameService;

@Service
public class EndGameServiceImpl implements EndGameService {
	
	public PobjedaInformacije pobjeda(@RequestBody List<String> board/*, defaultValue = "World"*/) {
		System.out.println(board);
		String[]array = new String [board.size()];
		System.out.println(board);
		board.toArray(array);
		final int[][] patternsPobjeda = {
		                                   {0, 1, 2},
		                                   {0, 3, 6},
		                                   {0, 4, 8},
		                                   {1, 4, 7},
		                                   {2, 5, 8},
		                                   {2, 4, 6},
		                                   {3, 4, 5},
		                                   {6, 7, 8},
		};
		 List<int[]> pobjednici = null;
		 String status;
		for (int i = 0; i < patternsPobjeda.length; i++) {
		      final int[] trio = patternsPobjeda[i];
		      int a = trio[0];
		      int b = trio[1];
		      int c = trio[2];
		      
		     if (array[a]!=null && array[a].equals(array[b]) && array[a].equals(array[c])) {
		    	 System.out.println(array[a].toString());
		        status = array[a].toString();
		        pobjednici= Arrays.asList(trio);
		        return new PobjedaInformacije(status, pobjednici);
		      //}
		    }}
		if(!(Collections.frequency(board, null)>0)) {
			System.out.println(Collections.frequency(board, null)>0);
			 status = "Izjednačeno je";
		}else {
			status = "In progress";
		}
		//System.out.println(array.toString()[2]);
		
		return new PobjedaInformacije(status, pobjednici);
}
}
