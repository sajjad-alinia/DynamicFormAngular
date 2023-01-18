import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IControl } from 'src/app/models/Icontrol';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent implements OnInit {
  @Input() control: IControl = {} as IControl;
  @Input() form!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
