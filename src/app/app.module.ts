import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import {TableModule} from 'primeng/table';



import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel';
import { FieldsetModule } from 'primeng/fieldset';
import { AccordionModule } from 'primeng/accordion';


import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { HelppageComponent } from './components/helppage/helppage.component';
import { GeneralComponent } from './components/general/general.component';
import { TestsComponent } from './components/tests/tests.component';
import { ClocksComponent } from './components/clocks/clocks.component';
import { FabulaPointsComponent } from './components/fabula-points/fabula-points.component';
import { ConflictsComponent } from './components/conflicts/conflicts.component';
import { ActionsComponent } from './components/actions/actions.component';
import { StatsComponent } from './components/stats/stats.component';
import { HpMpIpComponent } from './components/hp-mp-ip/hp-mp-ip.component';
import { TraitsBondsComponent } from './components/traits-bonds/traits-bonds.component';
import { SummonerComponent } from './components/classes/summoner/summoner.component';
import { DruidComponent } from './components/classes/druid/druid.component';
import { DarkKnightComponent } from './components/classes/dark-knight/dark-knight.component';
import { ElementalistComponent } from './components/classes/elementalist/elementalist.component';
import { AstromancerComponent } from './components/classes/astromancer/astromancer.component';
import { MonkComponent } from './components/classes/monk/monk.component';
import { GuardianComponent } from './components/classes/guardian/guardian.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderMenuComponent,
    HomepageComponent,
    HelppageComponent,
    GeneralComponent,
    TestsComponent,
    ClocksComponent,
    FabulaPointsComponent,
    ConflictsComponent,
    ActionsComponent,
    StatsComponent,
    HpMpIpComponent,
    TraitsBondsComponent,
    SummonerComponent,
    DruidComponent,
    DarkKnightComponent,
    ElementalistComponent,
    AstromancerComponent,
    MonkComponent,
    GuardianComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FontAwesomeModule,
    ButtonModule,
    CardModule,
    MenuModule,
    MenubarModule,
    PanelModule,
    FieldsetModule,
    AccordionModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
