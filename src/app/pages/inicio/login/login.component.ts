import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthService } from '../../../auth/services/auth.service';
import { User } from '../../../interfaces/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})

export class LoginComponent  {

  users: User[] = []
  email = ""
  password = ""
  error = '';

  miFormulario: FormGroup = this.fb.group({

    email:    ['',[ Validators.required, Validators.email]],
    password: ['',[ Validators.required, Validators.minLength(4)]]

  });

  constructor( private fb: FormBuilder, private authService: AuthService) { }

  login() {
    this.authService.login(this.email, this.password).subscribe(
      data => {
        this.error = ''

        localStorage.setItem('Authorization', data.access_token)
      },
      error => (error.error.statusCode === 401) ? this.error = 'Email y/o contraseña invalida!' : this.error = '');
  }

  getRoles(){

    this.authService.getUsers().subscribe(users => (this.users = users))
  }

}
