import { Component } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { User } from '../../../interfaces/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent {

  user: User = {
    roles_id: 2,
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    phone: '',
  }

  miFormulario: FormGroup = this.fb.group({

    name: ['', [Validators.required]],
    adress: ['', [Validators.required]],
    phone: ['', [Validators.required, Validators.maxLength(9)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]

  });

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  registro() {

    console.log(this.miFormulario.value);
    console.log(this.miFormulario.valid);
  }

  register() {
    this.authService.register(this.user).subscribe(data => console.log(data))
  };

}
