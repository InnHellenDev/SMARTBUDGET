import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from "@angular/animations";


@Component({
  selector: 'app-informes',
  templateUrl: './informes.component.html',
  styleUrls: ['./informes.component.css'],
  animations: [
		// Evento que se ejecuta la transición 'fade in o fade out' para los componentes que tienen como identificador 'apps'		
		trigger('apps', [
			// Transición de cualquier identificador a 'fadeIn'		
			transition('* => fadeIn', [
				style({ opacity: 0 }),
				animate(1000, style({ opacity: 1 }))]),
			// Transición de cualquier identificador a 'fadeOut'		
			transition('* => fadeOut', [
				animate(1000, style({ opacity: 0 }))])])],
})
export class InformesComponent implements OnInit {

  public indexGrafico = 0;
	/**
	 * Configuraciones para el gráfico
	 * @see https://swimlane.gitbook.io/ngx-charts/examples/line-area-charts/line-chart
	*/

	// public configGraph = {
	// 	view: [800, 400],
	// 	legend: true,
	// 	showLabels: true,
	// 	animations: true,
	// 	xAxis: true,
	// 	yAxis: true,
	// 	showYAxisLabel: true,
	// 	showXAxisLabel: true,
	// 	gradient: true,
	// 	xAxisLabel: "Fechas y horas",
	// 	yAxisLabel: "Temperatura (°C)",
	// 	//legendTitle:  "Nombre Equipo";
	// 	timeline: true,
	// 	maxXAxisTickLength: 0,
	// 	maxYAxisTickLength: 10,
	// 	colorScheme: {
	// 		domain: [
	// 			"#5AA454",
	// 			"#E44D25",
	// 			"#CFC0BB",
	// 			"#7aa3e5",
	// 			"#a8385d",
	// 			"#aae3f5",
	// 		]
	// 	}
	// };

  ngOnInit(): void {
  }

}
