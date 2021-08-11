import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoryFormComponent } from './category-form/category-form.component';
import { CategoryListComponent } from './category-list/category-list.component';

@NgModule({
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CategoryFormComponent, CategoryListComponent]
})
export class CategoriesModule { }
