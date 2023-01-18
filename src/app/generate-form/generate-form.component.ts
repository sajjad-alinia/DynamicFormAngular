import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { IControl } from '../models/Icontrol';


@Component({
  selector: 'app-generate-form',
  templateUrl: './generate-form.component.html',
  styleUrls: ['./generate-form.component.css']
})
export class GenerateFormComponent implements OnInit, OnChanges {

  @Input() controlList: Array<IControl> = [];
  @Input() callbackFucntion!: (form: any) => void;

  constructor() { }

  form: FormGroup = {} as FormGroup;

  ngOnInit(): void {

  }

  ngOnChanges() {
    const fromObj: any = {};

    // generate form control object
    this.controlList.forEach((item) => {
      if (item.type == 'date-range' && item.options) {
        if (item.required) {
          fromObj[item.options[0].key] = new FormControl(item.data, Validators.required)
          fromObj[item.options[1].key] = new FormControl(item.data, Validators.required)
        }
        else {
          fromObj[item.options[0].key] = new FormControl(item.data)
          fromObj[item.options[1].key] = new FormControl(item.data)
        }
      }
      else {
        if (item.required) {
          fromObj[item.name] = new FormControl(item.data, Validators.required)
        }
        else {
          fromObj[item.name] = new FormControl(item.data)
        }
      }
    })

    // create form
    this.form = new FormGroup(fromObj);

  }

  // submit form
  formSubmit() {
    /** send form to callback function in parent component */
    this.callbackFucntion(this.form);
  }

}
