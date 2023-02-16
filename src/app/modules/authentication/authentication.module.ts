import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AuthenticationRoutingModule } from '@sicatel/modules/authentication/authentication-routing.module';
import { AuthenticationComponent } from '@sicatel/modules/authentication/components/authentication.component';
import { AuthenticationContainer } from '@sicatel/modules/authentication/containers/authentication.container';
import { DirectivesModule } from '@sicatel/shared/directives/directives.module';


@NgModule({
    declarations: [
        AuthenticationContainer,
        AuthenticationComponent
    ],
    imports: [
        AuthenticationRoutingModule,
        CommonModule,
        ReactiveFormsModule,
        MatInputModule,
        MatIconModule,
        MatProgressSpinnerModule,
        DirectivesModule
    ]
})
export class AuthenticationModule {}
