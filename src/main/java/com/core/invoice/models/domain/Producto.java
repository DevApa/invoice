package com.core.invoice.models.domain;

public class Producto {
	private String nombre;
	private double precio;

	
	public Producto() {
	
	}

	
	public Producto(String nombre, double d) {	
		this.nombre = nombre;
		this.precio = d;
	}


	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public double getPrecio() {
		return precio;
	}

	public void setPrecio(double precio) {
		this.precio = precio;
	}

}
