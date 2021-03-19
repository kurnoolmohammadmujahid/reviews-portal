import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopOwnerModule } from './pages/shop-owner/shop-owner.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReviewsModule } from './pages/reviews/reviews.module';
import { LoginModule } from './pages/login/login.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ShopOwnerModule,
    ReviewsModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
