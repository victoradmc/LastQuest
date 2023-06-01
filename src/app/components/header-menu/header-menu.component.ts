import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css']
})
export class HeaderMenuComponent implements OnInit {

  items: MenuItem[] = [];

  constructor() {}

  ngOnInit() {
        this.items = [
            {
                label: 'Home',
                routerLink: '/'
            },
            {
                label: 'Regras',
                icon: 'pi pi-fw pi-file',
                items: [
                    {
                        label: 'Geral', 
                        icon: 'pi pi-fw pi-book', 
                        routerLink: '/geral'
                    },
                    {
                        label: 'Testes', 
                        icon: 'pi pi-fw pi-stop',
                        routerLink: '/tests'
                    },
                    {
                        label: 'Relógios de progresso', 
                        icon: 'pi pi-fw pi-clock',
                        routerLink: '/clocks',
                        disabled: true
                    },
                    {
                        label: 'Fabula & Ultima Points', 
                        icon: 'pi pi-fw pi-star-fill',
                        routerLink: '/fabula-points'
                    },
                    {
                        label: 'Conflitos e Batalha', 
                        icon: 'pi pi-fw pi-shield',
                        routerLink: '/conflicts',
                        disabled: true
                    },
                    {
                        label: 'Ações', 
                        icon: 'pi pi-fw pi-caret-up',
                        routerLink: '/actions'
                    },
                ]
            },
            {
                label: 'Criando Personagens',
                icon: 'pi pi-fw pi-pencil',
                items: [
                    {label: 'Atributos', icon: 'pi pi-fw pi-book', routerLink: '/stats'},
                    {label: 'Hp, MP e IP', icon: 'pi pi-fw pi-heart-fill', routerLink: '/hp-mp-ip'},
                    {label: 'Laços e Traços', icon: 'pi pi-fw pi-users', routerLink: '/traits-bonds'},
                    {
                        label: 'Classes', 
                        icon: 'pi pi-fw pi-tag',
                        items: [
                            { label: 'Summoner', routerLink: '/summoner' },
                            { label: 'Druída', routerLink: '/druid' },
                            { label: 'Cavaleiro Sombrio', routerLink: '/dark-knight' },
                            { label: 'Elementalista', routerLink: '/elementalist' },
                            { label: 'Astromante', routerLink: '/astromancer' },
                            { label: 'Monge', routerLink: '/monk' },
                            { label: 'Guardião', routerLink: '/guardian' },
                            { label: 'Sábio', routerLink: '/scholar' },
                            { label: 'Bardo', routerLink: '/bard' },
                            { label: 'Ladino', routerLink: '/rogue' },
                            { label: 'Caçador', routerLink: '/hunter' },
                            { label: 'Sacerdote', routerLink: '/priest' },
                            { label: 'Explorador', routerLink: '/explorer' },
                            { label: 'Duelista', routerLink: '/duelist' },
                        ]
                    },
                    {label: 'Equipamento', icon: 'pi pi-fw pi-shopping-cart', routerLink: '/equipment'},
                ]
            },
            {
                label: 'Utilidades',
                icon: 'pi pi-fw pi-credit-card',
                items: [
                    {label: 'Escudo do Mestre', icon: 'pi pi-fw pi-image'},
                    {label: 'Escudo do Jogador', icon: 'pi pi-fw pi-id-card'}
                ],
                disabled: true
            },
            {
                label: 'Sobre',
                icon: 'pi pi-fw pi-box',
                routerLink: '/help'
            },
        ]
    }


}
