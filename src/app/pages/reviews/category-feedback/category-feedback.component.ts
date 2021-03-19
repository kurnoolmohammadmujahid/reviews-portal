import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServerCallsService } from 'src/app/services/server-calls.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-category-feedback',
  templateUrl: './category-feedback.component.html',
  styleUrls: ['./category-feedback.component.scss']
})
export class CategoryFeedbackComponent implements OnInit {
  products: any = [];
  paramId: string;
  postFeedbackModal: boolean = false;
  postFeedbackForm: FormGroup;
  customer: boolean = false;
  image: any;
  constructor(private _Activatedroute: ActivatedRoute,
    private _router: Router,
    private apiCall: ServerCallsService,
    private fb: FormBuilder) {
    this.postFeedbackForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      rating: [0, Validators.required]
    });
  }

  ngOnInit(): void {
    let value = sessionStorage.getItem('id');
    if (value == 'customer') {
      this.customer = true;
    } else {
      this.customer = false;
    }
    this._Activatedroute.paramMap.subscribe(params => {
      this.paramId = params.get('category');
      console.log(this.paramId);
      if (this.paramId == 'medical') {
        this.image = "assets/img/medical.png"
      }
      else if (this.paramId == 'grocery') {
        this.image = "assets/img/grocery.png"
      }
      else if (this.paramId == 'toys') {
        this.image = "assets/img/toys.png"
      }
      this.fetchShopList();
    });
  }

  openPostForm() {
    this.postFeedbackModal = true;
  }

  fetchShopList() {
    this.apiCall.getReviewLst().then(data2 => {
      console.log(data2);
      this.products = [];
      for (let shop of data2) {
        if (this.paramId == shop.category) {
          this.products.push(shop);
        }
      }
    });
  }

  postReview() {
    let data = {
      "name": this.postFeedbackForm.value.name,
      "category": this.paramId,
      "rating": this.postFeedbackForm.value.rating,
      "description": this.postFeedbackForm.value.description,
    }
    this.apiCall.addReview(data).then(data2 => {
      console.log(data2);
      this.postFeedbackModal = false;
      this.fetchShopList();
    });
  }

}
