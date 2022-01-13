import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChange,
} from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup
  @Input() input = ''
  constructor() {
    this.formLogin = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(40),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(40),
      ]),
    })
  }

  saveLogin() {
    //console.log(this.formLogin.valid)
    if (this.formLogin.status) {
      console.log('formulario incompleto')
    } else console.log('Formulario completo')
  }

  ChangesInput(e: any) {
    console.log(e)
  }

  ngOnChangeInput2(e: SimpleChange) {
    console.log('input2', e)
  }

  ngOnChangeTest(e: OnChanges) {
    console.log(e)
  }

  ngOnInit(): void {}
}
