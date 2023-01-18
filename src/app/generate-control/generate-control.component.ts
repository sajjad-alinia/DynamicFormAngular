import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IControl } from '../models/Icontrol';

@Component({
  selector: 'app-generate-control',
  templateUrl: './generate-control.component.html',
  styleUrls: ['./generate-control.component.css']
})
export class GenerateControlComponent implements OnInit {
  @Input() control: IControl = {} as IControl;
  @Input() form!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }



}
