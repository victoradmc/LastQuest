import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'help', component: HelppageComponent },
  { path: 'geral', component: GeneralComponent },
  { path: 'tests', component: TestsComponent },
  { path: 'clocks', component: ClocksComponent },
  { path: 'fabula-points', component: FabulaPointsComponent },
  { path: 'conflicts', component: ConflictsComponent },
  { path: 'actions', component: ActionsComponent },
  { path: 'stats', component: StatsComponent },
  { path: 'hp-mp-ip', component: HpMpIpComponent },
  { path: 'traits-bonds', component: TraitsBondsComponent },
  { path: 'summoner', component: SummonerComponent },
  { path: 'druid', component: DruidComponent },
  { path: 'dark-knight', component: DarkKnightComponent },
  { path: 'elementalist', component: ElementalistComponent },
  { path: 'astromancer', component: AstromancerComponent },
  { path: 'monk', component: MonkComponent },
  { path: 'guardian', component: GuardianComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
