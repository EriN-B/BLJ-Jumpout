import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing/landing.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Angular Material
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatRippleModule} from '@angular/material/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { LoginComponent } from './pages/login/login.component';
import { MatCardModule } from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip';
import {environment} from "../environments/environment";

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { ModalComponent } from './pages/modal/modal.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CreateComponent } from './pages/create/create.component';
import {AngularFireAuthGuard} from "@angular/fire/auth-guard";
import { NavbarComponent } from './pages/navbar/navbar.component';
import { BlogCardComponent } from './components/blog-card/blog-card.component';
import { StatsComponent } from './pages/stats/stats.component';
import { VideoComponent } from './pages/modal/video/video.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    BlogComponent,
    LoginComponent,
    ModalComponent,
    CreateComponent,
    NavbarComponent,
    BlogCardComponent,
    StatsComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    MatInputModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSliderModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatDividerModule,
    MatIconModule,
    MatTableModule,
    MatDialogModule,
    MatGridListModule,
    MatCardModule,
    FontAwesomeModule,
    MatTooltipModule
  ],
  entryComponents: [
    ModalComponent,
    VideoComponent
  ],
  exports: [
    ModalComponent,
    VideoComponent
  ],
  providers: [
    ModalComponent,
    AngularFireAuthGuard,
    VideoComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
