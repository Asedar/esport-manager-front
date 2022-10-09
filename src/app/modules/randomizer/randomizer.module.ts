import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RandomizerRoutingModule } from './randomizer-routing.module';
import { RandomizerComponent } from './randomizer.component';
import { RandomizerInputComponent } from './components/randomizer-input/randomizer-input.component';
import { RandomizerDialogComponent } from './components/randomizer-dialog/randomizer-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import { NavbarModule } from '../navbar/navbar.module';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { NumberPickerModule } from 'ng-number-picker';
import { RandomizerResultsComponent } from './components/randomizer-results/randomizer-results.component';

@NgModule({
  declarations: [
    RandomizerComponent,
    RandomizerInputComponent,
    RandomizerDialogComponent,
    RandomizerResultsComponent
  ],
  imports: [
    CommonModule,
    RandomizerRoutingModule,
    MatIconModule,
    MatDialogModule,
    NavbarModule,
    MatDividerModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatRadioModule,
    NumberPickerModule,
    FormsModule
  ],
  entryComponents: [RandomizerDialogComponent, RandomizerResultsComponent]
})
export class RandomizerModule { }
