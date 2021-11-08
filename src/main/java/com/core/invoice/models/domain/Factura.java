package com.core.invoice.models.domain;

import java.io.Serializable;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.context.annotation.RequestScope;

@Component
@RequestScope
public class Factura implements Serializable{
	
	private static final long serialVersionUID = 3724895870708839727L;

	@Value("${factura.titles}")
	private String titles;
	
	@Value("${factura.descripcion}")
	private String descripcion;
	
	@Autowired
	private Cliente cliente;
	
	@Autowired
	private List<Items> items;
	
	@PostConstruct
	public void inicializar() {
		cliente.setNombres(cliente.getNombres().concat(" ").concat(cliente.getApellidos()));
		descripcion = descripcion.concat(" del cliente: ").concat(cliente.getNombres());
		
	}
	
	@PreDestroy
	private void destruir() {
		System.out.println("Documento destruido=> ".concat(descripcion));
	}
	
	public Factura() {

	}

	public Factura(String descripcion, Cliente cliente, List<Items> items) {
		this.descripcion = descripcion;
		this.cliente = cliente;
		this.items = items;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public Cliente getCliente() {
		return cliente;
	}

	public void setCliente(Cliente cliente) {
		this.cliente = cliente;
	}

	public List<Items> getItems() {
		return items;
	}

	public void setItems(List<Items> items) {
		this.items = items;
	}
	
	

}
