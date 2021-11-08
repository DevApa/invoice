package com.core.invoice;

import java.util.Arrays;
import java.util.List;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.context.annotation.PropertySource;
import org.springframework.context.annotation.PropertySources;


import com.core.invoice.models.domain.Items;
import com.core.invoice.models.domain.Producto;
import com.core.invoice.models.service.AdvanceService;
import com.core.invoice.models.service.IUsuarioService;
import com.core.invoice.models.service.SimpleService;

@Configuration
@PropertySources({
	@PropertySource("classpath:titles.properties")
})
public class AppConfig {
	
	@Primary
	@Bean("simpleService")
	public IUsuarioService registerSimpleService() {
		return new SimpleService();		
	}
	
	@Bean("advanceService")
	public IUsuarioService registerAdvanceService() {
		return new AdvanceService();		
	}
	
	@Bean("itemFactura")
	public List<Items> registrarItems(){
		Producto p1 = new Producto("Pasta de Dientes Colgate", 1.25);
		Producto p2 = new Producto("Cepillo de Dientes", 2.50);
		Producto p3 = new Producto("After Shape", 2.50);
		
		Items line1 = new Items(p1, 2);
		Items lina2 = new Items(p2,4);
		Items linea3 = new Items(p3,5);
		
		return Arrays.asList(line1, lina2, linea3);
	}
	
	
	@Bean("itemFacturaTec")
	@Primary
	public List<Items> registrarItemsTec(){
		Producto p1 = new Producto("Laptop Dell i7", 1520.96);
		Producto p2 = new Producto("Impresora multifunción Epson", 322.50);
		Producto p3 = new Producto("Escritorio PC", 200.50);
		Producto p4 = new Producto("Maletin Laptop 15 ", 46.50);
		
		Items line1 = new Items(p1, 2);
		Items lina2 = new Items(p2,4);
		Items linea3 = new Items(p3,5);
		Items linea4 = new Items(p4,5);
		
		return Arrays.asList(line1, lina2, linea3, linea4);
	}
}
