import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IControl } from './models/Icontrol';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dynamicForm';
  public form: FormGroup = {} as FormGroup;

  /**
   * 
   * @param form = call by generate-form component
   */
  callback = (form: any) => {
    this.form = form;
  }


  /**
   * control list array
   * get array from apiCall or json external file or property this app use property
   */
  public controlList: Array<IControl> = [
    {
      name: 'TypeNumber',
      displayName: 'TypeNumber: ',
      type: 'number',
      description: 'des TypeNumber',
      required: true,
      validator: '',
      visible: true,
      readOnly: true
    },
    {
      name: 'TypeText',
      displayName: 'TypeText: ',
      type: 'text',
      description: 'des TypeText',
      required: true,
      validator: '[0-9]',
      visible: true,
      readOnly: false
    },
    {
      name: 'TypeTextarea',
      displayName: 'TypeTextarea: ',
      type: 'textarea',
      description: 'des TypeTextarea',
      required: true,
      validator: '',
      visible: true,
      readOnly: true,
      data: 'this data from json'
    },
    {
      name: 'TypeDate',
      displayName: 'TypeDate: ',
      type: 'date',
      description: 'des TypeDate',
      required: true,
      validator: '',
      visible: true,
      readOnly: false,
      data: '12/07/2000'
    },
    {
      name: 'TypeDateRange',
      displayName: 'TypeDateRange: ',
      options: [
        { key: 'from', value: '13/1/2000' },
        { key: 'to', value: '14/1/2000' },
      ],
      type: 'date-range',
      description: 'des TypeDateRange',
      required: true,
      validator: '',
      visible: true,
      readOnly: true
    },
    {
      name: 'TypeDropdown',
      displayName: 'TypeDropdown: ',
      options: [
        { key: 'fa', value: 'persian' },
        { key: 'en', value: 'english' },
        { key: 'de', value: 'germany' }
      ],
      type: 'dropdown',
      description: 'des TypeDropdown',
      required: true,
      validator: '',
      visible: true,
      readOnly: false,
      data: 'select'
    },
    {
      name: 'TypeRadio',
      displayName: 'TypeRadio: ',
      options: [
        { key: 'Male', value: 'Male' },
        { key: 'Female', value: 'Female' }
      ],
      type: 'radio',
      description: 'des TypeRadio',
      required: true,
      validator: '',
      visible: true,
      readOnly: true
    },
    {
      name: 'TypeCheckBox',
      displayName: 'TypeCheckBox: ',
      type: 'checkbox',
      description: 'des TypeCheckBox',
      required: true,
      validator: '',
      visible: true,
      readOnly: true
    }

  ];
}
