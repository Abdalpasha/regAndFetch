import { NgModule } from '@angular/core';
import { MatButtonModule, MatTableModule, MatSortModule, MatPaginatorModule, MatFormFieldModule, MatInputModule } from '@angular/material'

const material = [MatButtonModule, MatTableModule, MatSortModule, MatPaginatorModule, MatFormFieldModule, MatInputModule]

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
