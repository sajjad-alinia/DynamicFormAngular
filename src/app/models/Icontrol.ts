
/**
 * name = html name element
 * displayName = show on lable form
 * type = field type  =  'number' | 'text' | 'textarea' | 'date' | 'date-range' | 'dropdown' | 'radio' | 'checkbox'
 * opetions = use input field only type dropdown,dare-range and radio
 * description = show description below field
 * required = required
 * validator = get regex for valid field
 * visible = show field on display
 * readOnly = readOnly
 * date = default value field
 */
export interface IControl {
    name: string,
    displayName: string,
    type: 'number' | 'text' | 'textarea' | 'date' | 'date-range' | 'dropdown' | 'radio' | 'checkbox',
    options?: { key: string, value: string }[],
    description: string,
    required: boolean,
    validator: string,
    format?: string,
    visible: boolean,
    readOnly: boolean,
    data?: string
}


