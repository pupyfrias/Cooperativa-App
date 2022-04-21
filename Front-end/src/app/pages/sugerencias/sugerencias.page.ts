import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-sugerencias',
  templateUrl: './sugerencias.page.html',
  styleUrls: ['./sugerencias.page.scss'],
})
export class SugerenciasPage implements OnInit {

  public formGroup: FormGroup;

  title = 'Sugerencias';
  constructor(
    private toastController: ToastController,
    private fb: FormBuilder

  ) { }

  get tipo() { return this.formGroup.get('tipo'); }
  get nombres() { return this.formGroup.get('nombres'); }
  get apellidos() { return this.formGroup.get('apellidos'); }
  get localidad() { return this.formGroup.get('localidad'); }
  get comentario() { return this.formGroup.get('comentario'); }

  ngOnInit() {
    this.formGroup = this.fb.group({
      tipo: ['', [Validators.required]],
      nombres: ['', [Validators.required]],
      apellidos: ['', [Validators.required]],
      localidad: ['', [Validators.required]],
      comentario: ['', [Validators.required]]
    });
  }

  async sendSugerencia(formDirective: FormGroupDirective) {

    if (this.formGroup.valid) {
      console.log(this.formGroup.value);
      const toast = await this.toastController.create({
        color: 'success',
        duration: 3000,
        message: 'Sugerencia enviado con exito',
      });
      formDirective.resetForm();
      await toast.present();
    }


  }
}
