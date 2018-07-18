import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import 'hammerjs';

@NgModule({
  //declarations: [ MatSlideToggleModule ],
  imports: [MatButtonModule, MatCheckboxModule, MatSlideToggleModule,],
  exports: [MatButtonModule, MatCheckboxModule, MatSlideToggleModule],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class MyOwnCustomMaterialModule { }
