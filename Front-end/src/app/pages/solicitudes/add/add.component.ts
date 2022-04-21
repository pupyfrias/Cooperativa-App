import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Solicitudes } from '../solicitudes-models';
import { AbstractControl } from '@angular/forms';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {

  models: any[] = [];
  patron: any[] = [];
  public formGroup: FormGroup;

  constructor(
    private solicitudes: Solicitudes,
    private fb: FormBuilder
  ) { }

  ngOnInit() {

    this.models = this.solicitudes.models;
    this.formGroup = this.fb.group(
      {
        tipo: ['', Validators.required]
      });
  }

  sendSolicitud(formDirective: FormGroupDirective) {
    console.log(formDirective.value);
  }

  selectChange(value: any, formDirective: FormGroupDirective) {

    this.patron.forEach(i => {
      this.formGroup.removeControl(i.nombre);
    });

    this.models.forEach((item, i) => {
      if (item.id === value) {
        this.patron = item.campos_data;
      }
    });

    this.patron.forEach(i => {
      this.formGroup.addControl(i.nombre, new FormControl('', Validators.required));
    });
  }

}
