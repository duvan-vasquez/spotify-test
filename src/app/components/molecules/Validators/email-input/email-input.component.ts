import { Component, Input } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'email-input',
  templateUrl: './email-input.atom.html',
  styleUrls: ['email-input.atom.scss'],
  providers: []
})

export class EmailInputAtom {
  
  @Input() parentForm: FormGroup;

  /** From validator */
  get email() : AbstractControl { return this.parentForm.controls.email }
}