import { Component, Input } from '@angular/core';
import { ConsultorModel } from '../models/consultor.interface';

@Component({
  selector: 'app-consultor',
  imports: [],
  templateUrl: './consultor.component.html',
  styleUrl: './consultor.component.scss'
})
export class ConsultorComponent {
  @Input() Consultor!: ConsultorModel;
}
