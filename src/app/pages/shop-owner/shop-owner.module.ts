import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopOwnerOperationsComponent } from './shop-owner-operations/shop-owner-operations.component';
import { ShopOwnerRoutingModule } from './shop-owner-routing.module';
import { DialogModule } from 'primeng/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServerCallsService } from '../../services/server-calls.service';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from 'src/app/shared/header/header.component';

@NgModule({
  declarations: [ShopOwnerOperationsComponent, HeaderComponent],
  exports: [HeaderComponent],
  imports: [
    CommonModule,
    ShopOwnerRoutingModule,
    DialogModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ServerCallsService]
})
export class ShopOwnerModule { }
