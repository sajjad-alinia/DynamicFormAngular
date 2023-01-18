import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IControl } from 'src/app/models/Icontrol';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  @Input() control: IControl = {} as IControl;
  @Input() form!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
