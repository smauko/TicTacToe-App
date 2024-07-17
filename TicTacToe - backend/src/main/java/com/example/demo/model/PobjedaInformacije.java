package com.example.demo.model;

import java.util.List;

public class PobjedaInformacije {
	private String status;
	private List<int[]> pobjednickaPolja;
	
	public PobjedaInformacije() {}
	public PobjedaInformacije(String status, List<int[]> pobjednici) {
		this.status=status;
		this.pobjednickaPolja= pobjednici;
	}
	public void setStatus(String status) {
		this.status=status;
	}
	public String getStatus() {
		return this.status;
	}
	public List<int[]> getPobjednickaPolja(){
		return this.pobjednickaPolja;
		}
	public void setPobjednickaPolja(List<int[]>pobjednici) {
		this.pobjednickaPolja= pobjednici;
	}
	
	
}
