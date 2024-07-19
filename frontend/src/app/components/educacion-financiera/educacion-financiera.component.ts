import { Component, OnInit } from '@angular/core';
import {ChangeDetectionStrategy } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-educacion-financiera',
  templateUrl: './educacion-financiera.component.html',
  styleUrls: ['./educacion-financiera.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EducacionFinancieraComponent implements OnInit {
  public longText = `La educación financiera es fundamental para manejar eficazmente las finanzas personales y alcanzar la estabilidad económica. <br><br>
  Aquí tienes algunos consejos de educación financiera que pueden ayudarte a mejorar tu salud financiera: <br><br>
  1. Establece un Presupuesto  <br><br>
  Registra tus ingresos y gastos: Anota todas tus fuentes de ingresos y tus gastos mensuales.
  Categoriza tus gastos: Identifica qué gastos son necesarios y cuáles son discrecionales.
  Ajusta según sea necesario: Asegúrate de que tus gastos no superen tus ingresos y ajusta tu presupuesto en consecuencia. <br><br>
  2. Ahorra Regularmente <br><br>
  Fondo de emergencia: Reserva al menos tres a seis meses de gastos en un fondo de emergencia.
  Ahorro automático: Configura transferencias automáticas a una cuenta de ahorros para fomentar el hábito de ahorrar. <br><br>
  3. Gestiona tu Deuda <br><br>
  Evita deudas innecesarias: Solo utiliza crédito cuando sea absolutamente necesario.
  Prioriza deudas con altos intereses: Paga primero las deudas con las tasas de interés más altas.
  Pago puntual: Siempre paga tus deudas a tiempo para evitar cargos por mora y daños a tu historial crediticio. <br><br>
  4. Inversión Inteligente <br><br>
  Diversifica: No pongas todos tus recursos en una sola inversión; diversifica para reducir riesgos.
  Educación continua: Aprende sobre diferentes opciones de inversión y sus riesgos asociados.
  Plan a largo plazo: Piensa en la inversión como una estrategia a largo plazo, no un esquema de enriquecimiento rápido.`;
  
  constructor() { }

  ngOnInit(): void {
  }

}
