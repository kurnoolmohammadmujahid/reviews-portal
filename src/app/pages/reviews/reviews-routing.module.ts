import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryFeedbackComponent } from './category-feedback/category-feedback.component';
import { ReviewCategoryComponent } from './review-category/review-category.component';

const routes: Routes = [
    {
        path: '',
        component: ReviewCategoryComponent
    },
    {
        path: 'category-feedback/:category',
        component: CategoryFeedbackComponent
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReviewsRoutingModule { }
