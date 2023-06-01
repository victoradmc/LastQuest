import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  weapons: any = [];

  armors: any = [];

  constructor() { }

  ngOnInit(): void {

    this.weapons = [
      { name: 'Cajado (2H)', cost: '100z (foco arcano)', accuracy: 'VONT + VONT', damage: 'MR + 6', img: 'staff'},
      { name: 'Grimório (2H)', cost: '100z (foco arcano)', accuracy: 'INT + INT', damage: 'MR + 6', img: 'tome'},
      { name: 'Besta (2H)', cost: '150z (arco)', accuracy: 'DES + INT', damage: 'MR + 8', img: 'crossbow'},
      { name: 'Arco Curto (2H)', cost: '200z', accuracy: 'DES + DES', damage: 'MR + 8', img: 'bow'},
      { name: 'Desarmado (1H)', cost: '0z', accuracy: 'DES + FOR', damage: 'MR', img: 'unarmed'},
      { name: 'Improvisado (1H)', cost: '0z', accuracy: 'DES + FOR', damage: 'MR + 2', img: 'improvised'},
      { name: 'Soqueira (1H)', cost: '150z (punho)', accuracy: 'DES + FOR', damage: 'MR + 6', img: 'knuckle'},
      { name: 'Adaga (1H)', cost: '150z', accuracy: 'DES + INT', damage: 'MR + 4', img: 'dagger'},
      { name: 'Pistola (1H)', cost: '250z (arma de fogo)', accuracy: ' DEX + INT', damage: 'MR + 8', img: 'pistol'},
      { name: 'Chicote (2H)', cost: '150z', accuracy: 'DES + DES', damage: 'MR + 8', img: 'whip'},
      { name: 'Martelo (1H)', cost: '200z', accuracy: 'FOR + FOR', damage: 'MR + 6', img: 'hammer'},
      { name: 'Machado (1H)', cost: '250z', accuracy: 'FOR + FOR', damage: 'MR + 10', img: 'axe'},
      { name: 'Machado de Guerra (2H)', cost: '350z', accuracy: 'FOR + FOR', damage: 'MR + 14', img: 'waraxe'},
      { name: 'Lança (1H)', cost: '200z', accuracy: 'DES + FOR', damage: 'MR + 8', img: 'spear'},
      { name: 'Alabarda (2H)', cost: '250z', accuracy: 'DES + FOR', damage: 'MR + 8', img: 'alabard'},
      { name: 'Espada bastarda (1H)', cost: '200z', accuracy: 'DES + FOR + 1', damage: 'MR + 6', img: 'sword'},
      { name: 'Espada de duas mãos (2H)', cost: '250z', accuracy: 'DES + FOR + 1', damage: 'MR + 10', img: 'greatsword'},
      { name: 'Katana (2H)', cost: '200z', accuracy: 'DES + INT + 1', damage: 'MR + 10', img: 'katana'},
      { name: 'Rapieira (1H)', cost: '200z', accuracy: 'DES + INT + 1', damage: 'MR + 6', img: 'rapier'},
      { name: 'Improvisado (1H)', cost: '0z', accuracy: 'DES + FOR', damage: 'MR + 2', img: 'improvised'},
      { name: 'Shuriken (1H)', cost: '150z', accuracy: 'DES + INT', damage: 'MR + 4', img: 'shuriken'}
    ]
    this.armors = [
      { name: 'Sem armadura', cost: '0z', defense: 'dDES', mdefense: 'dINT', initiative: '', img: 'noarmor' },
      { name: 'Camisa de Seda', cost: '100z', defense: 'dDES', mdefense: 'dINT + 2', initiative: '-1', img: 'silk-shirt' },
      { name: 'Colete de viagem', cost: '100z', defense: 'dDES + 1', mdefense: 'dINT + 1', initiative: '-1', img: 'garb' },
      { name: 'Túnica de combate', cost: '150z', defense: 'dDES + 1', mdefense: 'dINT + 1', initiative: '', img: 'tunic' },
      { name: 'Manto do mago', cost: '200z', defense: 'dDES + 1', mdefense: 'dINT + 2', initiative: '-1', img: 'sage-robe' },
      { name: 'Armadura de madeira (M)', cost: '150z', defense: '10', mdefense: 'dINT', initiative: '-2', img: 'bringandine' },
      { name: 'Armadura de Bronze (M)', cost: '200z', defense: '11', mdefense: 'dINT', initiative: '-3', img: 'bronze-plate' },
      { name: 'Armadura Rúnica (M)', cost: '250z', defense: '11', mdefense: 'dINT + 1', initiative: '-3', img: 'runic-plate' },
      { name: 'Armadura de Aço (M)', cost: '300z', defense: '12', mdefense: 'dINT + 1', initiative: '-4', img: 'steel-plate' },
      { name: 'Escudo de Bronze', cost: '100z', defense: '+2', mdefense: '', initiative: '', img: 'bronze-shield' },
      { name: 'Escudo rúnico (M)', cost: '150z', defense: '+2', mdefense: '+2', initiative: '', img: 'runic-shield' },
    ]
  }


}
