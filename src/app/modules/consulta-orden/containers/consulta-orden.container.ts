import { Component, HostListener } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { ConsultaOrdenComponent } from '../components/consulta-orden.component';

@Component({
  selector: 'sicatel-consulta-orden',
  templateUrl: './consulta-orden.container.html',
  styleUrls: ['./consulta-orden.container.scss']
})
export class ConsultaOrdenContainer {

configDialog = {
    hasBackdrop: true,
    disableClose: true,
    width: '50%',
    position: {
        top: '5%'
    }
} as MatDialogConfig;

   constructor(private dialog: MatDialog){ }

  @HostListener('window:keydown.control.u', ['$event'])
  openDialogConsultaOrden(event: Event) {
    event.preventDefault();
    const dialogRef = this.dialog.open(ConsultaOrdenComponent, this.configDialog);
    dialogRef.afterClosed().subscribe((result) => {
    });
  }
}
