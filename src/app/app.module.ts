import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { LoginComponent } from './auth/pages/login/login.component'
import { MaterialModule } from './material/material.module'

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
