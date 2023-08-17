import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientLayoutComponent } from './client-layout/client-layout.component';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DemoComponent } from './demo/demo.component';
import { RouterModule } from '@angular/router';
import { items } from 'src/app/client/client-layout/items';
import { ClientFormComponent } from './client-form/client-form.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatStepperModule} from '@angular/material/stepper';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
@NgModule({
  declarations: [
    ClientLayoutComponent,
    DemoComponent,
    ClientFormComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    ButtonsModule,
    MaterialModule,
    RouterModule.forRoot(items),
    ReactiveFormsModule
  ]
})
export class ClientModule { }
