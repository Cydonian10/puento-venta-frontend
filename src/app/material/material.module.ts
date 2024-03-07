import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  exports: [
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatCardModule
  ]
})
export class MaterialModule { }
