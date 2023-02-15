import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationContainer } from '@sicatel/modules/authentication/containers/authentication.container';

const routes: Routes = [{
    path: '',
    component: AuthenticationContainer,
    pathMatch: 'full'
}];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AuthenticationRoutingModule {}
