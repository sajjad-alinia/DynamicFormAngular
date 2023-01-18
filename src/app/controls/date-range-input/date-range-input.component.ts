import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IControl } from 'src/app/models/Icontrol';

@Component({
  selector: 'app-date-range-input',
  templateUrl: './date-range-input.component.html',
  styleUrls: ['./date-range-input.component.css']
})
export class DateRangeInputComponent implements OnInit {
  @Input() control: IControl = {} as IControl;
  @Input() form!: FormGroup;

  constructor() { }

  ngOnInit(): void {

  }

}
