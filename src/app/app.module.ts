import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MaterialModule} from "./material/material.module";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminComponent } from './views/admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ServicesService} from './shared/services.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ListclientsComponent } from './listclients/listclients.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './views/header/header.component';
import { ContentComponent } from './views/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ListclientsComponent,
    HeaderComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
