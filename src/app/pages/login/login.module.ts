import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServerCallsService } from 'src/app/services/server-calls.service';
import { LoginComponent } from './login/login.component';
import { ShopOwnerModule } from '../shop-owner/shop-owner.module';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ShopOwnerModule
  ],
  providers: [ServerCallsService]
})
export class LoginModule { }
