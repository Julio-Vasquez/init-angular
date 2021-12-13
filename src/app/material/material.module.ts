import { NgModule } from '@angular/core'

import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatGridListModule } from '@angular/material/grid-list'

@NgModule({
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
  ],
})
export class MaterialModule {}
