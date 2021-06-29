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
import { RegisterComponent } from './pages/register/register.component'
import { MatCardModule } from '@angular/material/card';
import {environment} from "../environments/environment";

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { ModalComponent } from './pages/modal/modal.component';



@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    BlogComponent,
    LoginComponent,
    RegisterComponent,
    ModalComponent
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
    MatCardModule
  ],
  entryComponents: [
    ModalComponent
  ],
  exports: [
    ModalComponent
  ],
  providers: [
    ModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
