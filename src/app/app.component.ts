import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConsultorModel } from './models/consultor.interface';
import { ConsultorComponent } from "./consultor/consultor.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [ConsultorComponent]
})
export class AppComponent {
  nomeDaEmpresa: string = 'TechConsult Solutions';
  consultorJoao: ConsultorModel = {
    nome: "Joao Silva",
    especialidade: "Desenvolvedor FullStack",
    email: 'joao@email.com'
  }
}
