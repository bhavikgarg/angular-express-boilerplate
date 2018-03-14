import { NgModule } from '@angular/core'
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent, SignupComponent } from './index';

const components = [
    LoginComponent,
    SignupComponent
];

@NgModule({
    declarations : [...components],
    imports : [AuthRoutingModule],
    providers : [],
    bootstrap : []
})
export class AuthModule {}