import { Component, OnInit } from '@angular/core';
import { ServerCallsService } from 'src/app/services/server-calls.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-shop-owner-operations',
  templateUrl: './shop-owner-operations.component.html',
  styleUrls: ['./shop-owner-operations.component.scss']
})
export class ShopOwnerOperationsComponent implements OnInit {
  shopDetails: any = [];
  id: any;
  name: any;
  type: any;
  address: any;
  pincode: any;
  shopDetailForm: FormGroup;
  displayEditModal: boolean = false;
  displayCreate: boolean = false;
  customer: boolean = false;

  constructor(private fb: FormBuilder,
    private apiCall: ServerCallsService) {
    this.shopDetailForm = this.fb.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      address: ['', Validators.required],
      pincode: ['', Validators.required]
    });
  }


  editDialog(shop) {
    this.displayEditModal = true;
    this.id = shop.id;
    this.name = shop.name;
    this.type = shop.type;
    this.address = shop.address;
    this.pincode = shop.pincode;
  }

  createDialog() {
    this.displayCreate = true;
  }

  editShop() {
    let shopData = {
      'name': this.name,
      'type': this.type,
      'address': this.address,
      'pincode': this.pincode,
    };
    this.apiCall.updateShop(this.id, shopData).then(add => {
      this.fetchShopList();
      this.id = '';
      this.name = '';
      this.type = '';
      this.address = '';
      this.pincode = '';
      this.displayEditModal = false;
    });
  }


  addShop() {
    this.apiCall.addShop(this.shopDetailForm.value).then(add => {
      this.fetchShopList();
      this.displayCreate = false;
    });
  }

  deleteShop(shop) {
    console.log(shop);
    this.apiCall.deleteShop(shop.id).then(data2 => {
      this.fetchShopList();
    });
  }

  ngOnInit() {
    let value = sessionStorage.getItem('id');
    if (value == 'shopOwner') {
      this.customer = true;
    } else {
      this.customer = false;
    }
    this.fetchShopList();
  }

  fetchShopList() {
    this.apiCall.getShopLst().then(data2 => {
      this.shopDetails = data2;
      console.log(data2);
    });
  }

}
