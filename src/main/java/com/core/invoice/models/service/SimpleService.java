package com.core.invoice.models.service;

import org.springframework.context.annotation.Primary;

@Primary
public class SimpleService implements IUsuarioService{

	@Override
	public String operacion() {
		return "Simple Operations...!";
	}

	@Override
	public String operacionBase() {
		return "Base Simple Operation";
	}

}
