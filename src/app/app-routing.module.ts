import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingScreenComponent } from './components/landing-screen/landing-screen.component';
import { FamilyVideosComponent } from './components/family-videos/family-videos.component'
import { FamilyToBeVideosComponent } from './components/family-to-be-videos/family-to-be-videos.component';
import { FriendsVideosComponent } from './components/friends-videos/friends-videos.component';
import { RelativesVideoComponent } from './components/relatives-video/relatives-video.component';
import { AshuComponent } from './components/family-to-be-videos/ashu/ashu.component';
import { VaishnaviComponent } from './components/family-to-be-videos/vaishnavi/vaishnavi.component';
import { AshuDaComponent } from './components/relatives-video/ashu-da/ashu-da.component';
import { KopalPihuComponent } from './components/relatives-video/kopal-pihu/kopal-pihu.component';
import { InaDiComponent } from './components/relatives-video/ina-di/ina-di.component';
import { SpComponent } from './components/friends-videos/sp/sp.component';
import { DhawalComponent } from './components/friends-videos/dhawal/dhawal.component';
import { RiteshComponent } from './components/friends-videos/ritesh/ritesh.component';
import { SonalComponent } from './components/friends-videos/sonal/sonal.component';
import { GunjanComponent } from './components/friends-videos/gunjan/gunjan.component';
import { MumalComponent } from './components/friends-videos/mumal/mumal.component';
import { RaviComponent } from './components/friends-videos/ravi/ravi.component';
import { AnuComponent } from './components/friends-videos/anu/anu.component';
import { AshutoshComponent } from './components/friends-videos/ashutosh/ashutosh.component';
import { GuptaComponent } from './components/friends-videos/gupta/gupta.component';

const routes: Routes = [
  {
    path: '',
    component: LandingScreenComponent
  },
  {
    path: 'home',
    component: LandingScreenComponent
  },
  {
    path: 'family',
    component: FamilyVideosComponent
  },
  {
    path: 'family-to-be',
    component: FamilyToBeVideosComponent
  },
  {
    path: 'ashu',
    component: AshuComponent
  },
  {
    path: 'vaishnavi',
    component: VaishnaviComponent
  },
  {
    path: 'friends',
    component: FriendsVideosComponent
  },
  {
    path: 'sp',
    component: SpComponent
  },
  {
    path: 'dhawal',
    component: DhawalComponent
  },
  {
    path: 'ritesh',
    component: RiteshComponent
  },
  {
    path: 'sonal',
    component: SonalComponent
  },
  {
    path: 'gupta',
    component: GuptaComponent
  },
  {
    path: 'gunjan',
    component: GunjanComponent
  },
  {
    path: 'mumal',
    component: MumalComponent
  },
  {
    path: 'ravi',
    component: RaviComponent
  },
  {
    path: 'anu',
    component: AnuComponent
  },
  {
    path: 'ashutosh',
    component: AshutoshComponent
  },
  {
    path: 'relatives',
    component: RelativesVideoComponent
  },
  {
    path: 'relatives',
    component: RelativesVideoComponent
  },
  {
    path: 'ashu-da',
    component: AshuDaComponent
  },
  {
    path: 'kopal-pihu',
    component: KopalPihuComponent
  },
  {
    path: 'ina-di',
    component: InaDiComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
