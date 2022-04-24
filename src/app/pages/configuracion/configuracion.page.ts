import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
})
export class ConfiguracionPage implements OnInit {

  formGroup: FormGroup;
  title = 'Configuración';
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

  submit() {

    if (this.formGroup.valid) {

      this.service.print(JSON.stringify(this.formGroup.value));
    }
  }

}
