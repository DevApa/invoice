package com.core.invoice.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.core.invoice.models.service.IUsuarioService;

@Controller
public class IndexController {
	
	@Autowired
	@Qualifier("advanceService")
	private IUsuarioService uservice;
	
	
	@GetMapping({"", "/", "/index"})
	public String index(Model model) {
		model.addAttribute("title", uservice.operacion());
		return "index";
	}
}
