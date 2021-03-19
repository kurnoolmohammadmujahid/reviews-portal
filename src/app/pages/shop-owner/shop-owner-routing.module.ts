import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopOwnerOperationsComponent } from './shop-owner-operations/shop-owner-operations.component';

const routes: Routes = [
    {
        path: '',
        component: ShopOwnerOperationsComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ShopOwnerRoutingModule { }
