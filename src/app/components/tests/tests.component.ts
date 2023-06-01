import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {

  opportunities: any = [];

  constructor() { }

  ngOnInit(): void {
    this.opportunities = [
      {
        name:'Vantagem',
        description: 'O próximo teste, seu ou de um aliado, tem um bônus de +4'
      },
      {
        name:'Aflição',
        description: 'Uma criatura sofre Confusão, lentidão, fraqueza ou abalado.'
      },
      {
        name:'Criar Laço',
        description: 'Você cria um Laço com alguém ou adiciona uma emoção para um dos laços existentes.'
      },
      {
        name:'Faux Pas',
        description: 'Escolha uma criatura presente na cena. Eles devem entregar uma informação ou fazer uma declaração comprometedora.'
      },
      {
        name:'Favor',
        description: 'Alguém te deve um favor, pois suas ações o fizeram acreditar em você e te dar suporte.'
      },
      {
        name:'Informação',
        description: 'Você descobre um detalhe importante - O mestre pode te dar o detalhe, mas você pode descrever como conseguiu.'
      },
      {
        name:'Item perdido',
        description: 'Um item é destruído, perdido, roubado ou deixado para trás.'
      },
      {
        name:'Progresso',
        description: 'Você preenche ou apaga 2 seções de um relógio de progresso.'
      },
      {
        name:'Plot Twist!',
        description: 'Você escolhe algo ou alguém para aparecer na cena. Deve estar de acordo com o Mestre.'
      },
      {
        name:'Scan',
        description: 'Você descobre uma vulnerabilidade, traço ou laço de uma criatura que pode ver.'
      },
      {
        name:'Desmascarar',
        description: 'Você descobre os objetivos e motivações de uma criatura.'
      },
    ]
  }

}
