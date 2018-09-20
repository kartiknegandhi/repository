import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { LanguageSelectComponent } from './language-select.component';
import { SharedModule } from '../shared/shared.module';

// import { LanguageSelectRoutingModule } from './language-select-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: LanguageSelectComponent
      }
    ])  ],
  declarations: [LanguageSelectComponent]
})
export class LanguageSelectModule { }
