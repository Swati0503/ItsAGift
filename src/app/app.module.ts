import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatGridListModule } from '@angular/material'
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingScreenComponent } from './components/landing-screen/landing-screen.component';
import { FamilyVideosComponent } from './components/family-videos/family-videos.component';
import { FamilyToBeVideosComponent } from './components/family-to-be-videos/family-to-be-videos.component';
import { FriendsVideosComponent } from './components/friends-videos/friends-videos.component';
import { RelativesVideoComponent } from './components/relatives-video/relatives-video.component';
import { AshuComponent } from './components/family-to-be-videos/ashu/ashu.component';
import { VaishnaviComponent } from './components/family-to-be-videos/vaishnavi/vaishnavi.component';
import { AshuDaComponent } from './components/relatives-video/ashu-da/ashu-da.component';
import { KopalPihuComponent } from './components/relatives-video/kopal-pihu/kopal-pihu.component';
import { InaDiComponent } from './components/relatives-video/ina-di/ina-di.component';
import { DhawalComponent } from './components/friends-videos/dhawal/dhawal.component';
import { SpComponent } from './components/friends-videos/sp/sp.component';
import { RiteshComponent } from './components/friends-videos/ritesh/ritesh.component';
import { SonalComponent } from './components/friends-videos/sonal/sonal.component';
import { GuptaComponent } from './components/friends-videos/gupta/gupta.component';
import { MumalComponent } from './components/friends-videos/mumal/mumal.component';
import { GunjanComponent } from './components/friends-videos/gunjan/gunjan.component';
import { RaviComponent } from './components/friends-videos/ravi/ravi.component';
import { AnuComponent } from './components/friends-videos/anu/anu.component';
import { AshutoshComponent } from './components/friends-videos/ashutosh/ashutosh.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingScreenComponent,
    FamilyVideosComponent,
    FamilyToBeVideosComponent,
    FriendsVideosComponent,
    RelativesVideoComponent,
    AshuComponent,
    VaishnaviComponent,
    AshuDaComponent,
    KopalPihuComponent,
    InaDiComponent,
    DhawalComponent,
    SpComponent,
    RiteshComponent,
    SonalComponent,
    GuptaComponent,
    MumalComponent,
    GunjanComponent,
    RaviComponent,
    AnuComponent,
    AshutoshComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
