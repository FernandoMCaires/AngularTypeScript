import { Injectable } from '@angular/core';
import { ConsultorModel } from '../models/consultor.interface';

@Injectable({
  providedIn: 'root'
})

export class ConsultorService {

  constructor() { }

  consultores: ConsultorModel [] =
  [{
    nome: "Joao Silva",
    especialidade: "Desenvolvedor FullStack",
    email: 'joao@email.com'
  },
  {
    nome: "Maria Silva",
    especialidade: "Desenvolvedora FullStack",
    email: 'maria@email.com'
  },
  {
    nome: "Andre Silva",
    especialidade: "Desenvolvedor FullStack",
    email: 'andre@email.com'
  },
  {
    nome: "Fernando Silva",
    especialidade: "Desenvolvedora FullStack",
    email: 'fernando@email.com'
  },
  {
    nome: "Louis Silva",
    especialidade: "Desenvolvedor FullStack",
    email: 'louis@email.com'
  },
  {
    nome: "Maria da Silva",
    especialidade: "Desenvolvedora FullStack",
    email: 'maria@email.com'
  }
]

  getConsultores(): ConsultorModel[]{
    return this.consultores
  }
}


