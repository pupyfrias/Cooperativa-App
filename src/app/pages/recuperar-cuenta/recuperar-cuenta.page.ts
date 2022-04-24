import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-recuperar-cuenta',
  templateUrl: './recuperar-cuenta.page.html',
  styleUrls: ['./recuperar-cuenta.page.scss'],
})



export class RecuperarCuentaPage implements OnInit {

  title = 'Recuperar Cuenta';

  formGroup: FormGroup;
  constructor(
    private fb: FormBuilder,
    private service: MainService
  ) { }

  get id() { return this.formGroup.get('id'); }
  get password() { return this.formGroup.get('email'); }
  ngOnInit() {

    this.formGroup = this.fb.group({
      id: ['', [Validators.required, Validators.maxLength(12), Validators.minLength(12)]],
      email: ['', [Validators.required, Validators.email]],
    });

  }

  submit(form: FormGroupDirective) {

    if (this.formGroup.valid) {

      form.resetForm();
      this.service.print(JSON.stringify(this.formGroup.value));
    }
  }
}
