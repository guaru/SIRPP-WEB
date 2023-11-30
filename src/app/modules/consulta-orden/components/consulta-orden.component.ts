import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'sicatel-consulta-orden',
  templateUrl: './consulta-orden.component.html'
})
export class ConsultaOrdenComponent {

  @ViewChild('inputOrden') inputOrden!: ElementRef;

  searchForm = new FormGroup({
    orden: new FormControl('', [Validators.maxLength(50), Validators.required])
  });


  constructor(public dialogRef: MatDialogRef<ConsultaOrdenComponent>) { }


  @HostListener('window:keydown.f8', ['$event'])
  onHostSubmit(event: KeyboardEvent): void {
    event.preventDefault();
    this.onSubmit();
  }

  onSubmit() {
    if (this.searchForm.valid) {
    } else {
      this.inputOrden.nativeElement.focus();
    }
  }
}
