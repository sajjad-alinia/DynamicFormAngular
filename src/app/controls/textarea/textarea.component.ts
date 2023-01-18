import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IControl } from 'src/app/models/Icontrol';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css']
})
export class TextareaComponent implements OnInit {
  @Input() control: IControl = {} as IControl;
  @Input() form!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
