import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServerCallsService } from 'src/app/services/server-calls.service';

@Component({
  selector: 'app-review-category',
  templateUrl: './review-category.component.html',
  styleUrls: ['./review-category.component.scss']
})
export class ReviewCategoryComponent implements OnInit {
  toys: any = [];
  medical: any = [];
  grocery: any = [];
  toysOverallrating: number;
  medicalOverallrating: number;
  groceryOverallrating: number;
  customer: boolean = false;
  constructor(private apiCall: ServerCallsService, 
    private route: Router) { }

  ngOnInit(): void {
    let value = sessionStorage.getItem('id');
    if (value == 'shopOwner') {
      this.customer = true;
    } else {
      this.customer = false;
    }
    this.fetchShopList();
  }

  openPostForm(){
    this.route.navigate(['/shop-owner-operations']);
  }

  fetchShopList() {
    this.apiCall.getReviewLst().then(data2 => {
      console.log(data2);
      for (let shop of data2) {
        if (shop.category == 'toys') {
          this.toys.push(shop.rating);
        }
        if (shop.category == 'medical') {
          this.medical.push(shop.rating);
        }
        if (shop.category == 'grocery') {
          this.grocery.push(shop.rating);
        }
      }
      this.toysOverallrating = this.avgValue(this.toys);
      this.medicalOverallrating = this.avgValue(this.medical);
      this.groceryOverallrating = this.avgValue(this.grocery);
    });
  }

  avgValue(times) {
    let sum = times.reduce((a, b) => a + b, 0);
    let avg = (sum / times.length) || 0;
    return avg;
  }


}
