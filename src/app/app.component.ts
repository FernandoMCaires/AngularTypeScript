import { Component, OnInit } from '@angular/core';
import { ConsultorModel } from './models/consultor.interface';
import { ConsultorComponent } from "./consultor/consultor.component";
import { CommonModule } from '@angular/common';
import { ConsultorService } from './services/consultor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [ConsultorComponent, CommonModule]
})
export class AppComponent implements OnInit {
  nomeDaEmpresa: string = 'TechConsult Solutions';
  consultores: ConsultorModel[] = [];

  // novo: termo de busca
  searchTerm: string = '';

  constructor(private consultorService: ConsultorService) {}

  ngOnInit(): void {
    this.consultores = this.consultorService.getConsultores();
  }

  // novo: atualiza searchTerm a partir do input
  onSearch(event: Event) {
    this.searchTerm = (event.target as HTMLInputElement).value;
  }

  // novo: getter que retorna os consultores filtrados
  get filteredConsultores(): ConsultorModel[] {
    if (!this.searchTerm) return this.consultores;
    const s = this.searchTerm.toLowerCase();
    return this.consultores.filter(c =>
      c.nome.toLowerCase().includes(s) ||
      c.especialidade.toLowerCase().includes(s) ||
      c.email.toLowerCase().includes(s)
    );
  }
}
