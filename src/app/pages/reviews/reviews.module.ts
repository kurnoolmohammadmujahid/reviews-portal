import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewCategoryComponent } from './review-category/review-category.component';
import { ReviewsRoutingModule } from './reviews-routing.module';
import { ServerCallsService } from '../../services/server-calls.service';
import { RatingModule } from 'primeng/rating';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryFeedbackComponent } from './category-feedback/category-feedback.component';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ShopOwnerModule } from '../shop-owner/shop-owner.module';

@NgModule({
  declarations: [ReviewCategoryComponent, CategoryFeedbackComponent],
  imports: [
    CommonModule,
    ReviewsRoutingModule,
    RatingModule,
    FormsModule,
    TableModule,
    DialogModule,
    ReactiveFormsModule,
    ShopOwnerModule
  ],
  providers: [ServerCallsService]
})
export class ReviewsModule { }
