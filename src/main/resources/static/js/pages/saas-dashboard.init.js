// var options={series:[{name:"series1",
//                      data:[31,40,36,51,49,72,69,56,68,82,68,76]}],
//                      chart:{height:320,type:"line",toolbar:"false",
//                      dropShadow:{enabled:!0,color:"#000",top:18,left:7,blur:8,opacity:.2}},
//                      dataLabels:{enabled:!1},colors:["#556ee6"],stroke:{curve:"smooth",width:3}},
// chart=new ApexCharts(document.querySelector("#line-chart"),options);
// chart.render();
// options={series:[50,30,25],chart:{type:"donut",height:262},labels:["Series A","Series B","Series C"],colors:["#556ee6","#34c38f","#f46a6a"],legend:{show:!1},plotOptions:{pie:{donut:{size:"70%"}}}};
// (chart=new ApexCharts(document.querySelector("#donut-chart"),options)).render();
// var radialoptions1={series:[17],chart:{type:"radialBar",width:60,height:60,sparkline:{enabled:!0}},
//                     dataLabels:{enabled:!1},colors:["#556ee6"],
//                     plotOptions:{radialBar:{hollow:{margin:0,size:"60%"},
//                     track:{margin:0},dataLabels:{show:!1}}}},
//                     radialchart1=new ApexCharts(document.querySelector("#radialchart-1"),radialoptions1);radialchart1.render();
// var radialoptions2={series:[52],chart:{type:"radialBar",width:60,height:60,sparkline:{enabled:!0}},dataLabels:{enabled:!1},
//     colors:["#34c38f"],plotOptions:{radialBar:{hollow:{margin:0,size:"60%"},track:{margin:0},dataLabels:{show:!1}}}},
//     radialchart2=new ApexCharts(document.querySelector("#radialchart-2"),radialoptions2);radialchart2.render();
// var radialoptions3={series:[54],chart:{type:"radialBar",width:60,height:60,sparkline:{enabled:!0}},dataLabels:{enabled:!1},
//     colors:["#f46a6a"],plotOptions:{radialBar:{hollow:{margin:0,size:"60%"},track:{margin:0},dataLabels:{show:!1}}}},
//     radialchart3=new ApexCharts(document.querySelector("#radialchart-3"),radialoptions3);radialchart3.render();
    
var options={series:[{name:"series1",
    data:[31,40,36,51,49,72,69,56,68,82,68,76]}],
    chart:{height:320,type:"line",toolbar:"false",
    dropShadow:{enabled:!0,color:"#000",top:18,left:7,blur:8,opacity:.2}},
    dataLabels:{enabled:!1},colors:["#556ee6"],stroke:{curve:"smooth",width:3}},
chart=new ApexCharts(document.querySelector("#line-chart"),options);
chart.render();
obtenerPorcentaje();

var radialoptions1={series:[17],chart:{type:"radialBar",width:60,height:60,sparkline:{enabled:!0}},
   dataLabels:{enabled:!1},colors:["#556ee6"],
   plotOptions:{radialBar:{hollow:{margin:0,size:"60%"},
   track:{margin:0},dataLabels:{show:!1}}}},
   radialchart1=new ApexCharts(document.querySelector("#radialchart-1"),radialoptions1);radialchart1.render();
var radialoptions2={series:[52],chart:{type:"radialBar",width:60,height:60,sparkline:{enabled:!0}},dataLabels:{enabled:!1},
colors:["#34c38f"],plotOptions:{radialBar:{hollow:{margin:0,size:"60%"},track:{margin:0},dataLabels:{show:!1}}}},
radialchart2=new ApexCharts(document.querySelector("#radialchart-2"),radialoptions2);radialchart2.render();
var radialoptions3={series:[54],chart:{type:"radialBar",width:60,height:60,sparkline:{enabled:!0}},dataLabels:{enabled:!1},
colors:["#f46a6a"],plotOptions:{radialBar:{hollow:{margin:0,size:"60%"},track:{margin:0},dataLabels:{show:!1}}}},
radialchart3=new ApexCharts(document.querySelector("#radialchart-3"),radialoptions3);radialchart3.render();

async function mostrarFormularioCalcular() {		
	const url = "/components/obtenerPorcentaje/";
	mostrarFormulario(url);
}


function obtenerPorcentaje(){
    return mostrarFormularioCalcular()
}

// const initParams = () => {
//     return {
//         method: "get",
//         headers: new Headers(),
//         mode: "cors",
//         cache: "default",
//     };
// };

// const request = (id = 0) => {
//     const base = "/home";
//     const url = [
//         `${base}/slider`,
//         `${base}/info`,
//         `${base}/implementacion`,
//         `${base}/imagenes`,
//         `${base}/contact`,
//     ];

//     return new Request(url[id], initParams());
// };

async function mostrarFormulario(url) {			
	fetch(url, {
        method: "get",
        headers: new Headers(),
        mode: "cors",
        cache: "default",
    })
		.then(response => response.json())		
		.catch(error => console.log('Error:' + error))
		.then(response =>{
            options={series:[response['porcentajeCompleto'],response['porcentajeNoCompleto']],chart:{type:"donut",height:262},labels:["Completado","No completado"],colors:["#556ee6","#34c38f","#f46a6a"],legend:{show:!1},plotOptions:{pie:{donut:{size:"70%"}}}};
            (chart=new ApexCharts(document.querySelector("#donut-chart"),options)).render();		
		});
    console.log(30)
        return 30
}



