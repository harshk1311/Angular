import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AddRoutingModule } from './add-routing.module';
import { FormsModule} from '@angular/forms';
import { from } from 'rxjs';
import { AddComponent } from './add/add.component';

@NgModule({
  declarations: [AddComponent],
  imports: [
    CommonModule,
    AddRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class AddModule { }
