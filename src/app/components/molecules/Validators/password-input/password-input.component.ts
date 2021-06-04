import { Component, Input } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'password-input',
  templateUrl: './password-input.atom.html',
  styleUrls: ['password-input.atom.scss'],
  providers: []
})

export class PasswordInputAtom {
  
  @Input() parentForm: FormGroup;

  /** From validator */
  get password() : AbstractControl { return this.parentForm.controls.password }
}