import { Component, HostListener } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { SicatelPermissions } from '@sicatel/configs/sicatel-permissions';
import { AuthService } from '@sicatel/core/services/auth.service';
import { AuthenticationSelector, fromAuthenticacion } from '@sicatel/modules/authentication/store';
import { ConsultaOrdenComponent } from '@sicatel/modules/consulta-orden/components/consulta-orden.component';
import { IConsultaOrdenRequest } from '@sicatel/shared/models/consulta-orden/consulta-orden-request.interface';

@Component({
  selector: 'sicatel-consulta-orden',
  templateUrl: './consulta-orden.container.html',
  styleUrls: ['./consulta-orden.container.scss']
})
export class ConsultaOrdenContainer {

  configDialog = {
    hasBackdrop: true,
    disableClose: true,
    width: '80%',
    position: {
      top: '5%'
    },
    data: {} as IConsultaOrdenRequest
  } as MatDialogConfig;
  regionId!: number;

  constructor(private dialog: MatDialog, private authService: AuthService, private store: Store<fromAuthenticacion.State>) {
    this.store.select(AuthenticationSelector.selectAuthenticationStateUser).subscribe(user => this.regionId = user.idRegion).unsubscribe();
  }

  @HostListener('window:keydown.control.u', ['$event'])
  openDialogConsultaOrden(event: Event) {
    event.preventDefault();
    if (this.regionId && this.authService.checkPermission(SicatelPermissions.consultaOrden, true)) {
      if (this.dialog.openDialogs.length === 0) {
        this.configDialog.data.regionId = this.regionId;
        const dialogRef = this.dialog.open(ConsultaOrdenComponent, this.configDialog);
        dialogRef.afterClosed().subscribe((result) => {

        });
      }
    }
  }

}
