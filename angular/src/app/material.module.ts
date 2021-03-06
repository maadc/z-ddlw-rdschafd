import {NgModule} from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';

//Centralizing all imports from Angular Material

@NgModule({
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatInputModule,
    DragDropModule,
    MatMenuModule,
    MatSnackBarModule,
    MatRadioModule,
    MatCardModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatTooltipModule
  ],
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatInputModule,
    DragDropModule,
    CdkTextareaAutosize,
    MatMenuModule,
    MatSnackBarModule,
    MatRadioModule,
    MatCardModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatTooltipModule
  ]
})

export class MaterialModule {}