import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HeaderRoutingModule } from './header-routing.module';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from '../shared/component/cart/cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderService } from './header.service';

@NgModule({
  declarations: [
    LoginComponent,
    HeaderComponent,
    RegisterComponent,
    //CartComponent,
  ],
  imports: [
    CommonModule,
    HeaderRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers:[
    HeaderService
  ]
})
export class HeaderModule {}
