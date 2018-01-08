
import { AbstractControl, FormControl } from '@angular/forms';
import { Directive, HostListener, Input} from '@angular/core';
import { Model } from 'ngx-model';
import { Errors } from '../models/error.model';

@Directive({ selector: '[appFieldValidator]' })
export class AppValidateDirective {
    @Input()
    appFieldValidator: AbstractControl;

    @Input()
    errorsModel: Model<Errors>;
    errors: Errors;
    controlName: string = null;

    constructor ()  {
    }

    /**
    * validateField() - The function executes on focus out from any input field.
    It finds out the case for the input and executes the validations defined for it and set the error model accordingly
    * @param <None> No parameters
    * @return <None> No return
    */
    @HostListener('focusout')
    validateField() {
    this.errors = this.errorsModel.get();
    const parent = this.appFieldValidator['_parent'];
        // now we will iterate those keys (i.e. names of controls)
        Object.keys(parent.controls).forEach((name) => {
            // and compare the passed control and
            // a child control of a parent - with provided name (we iterate them all)
            if (this.appFieldValidator === parent.controls[name]) {
                // both are same: control passed to Validator
                //  and this child - are the same references
                switch (name) {
                    case 'email' :
                        if (this.appFieldValidator.hasError('required')) {
                            this.errors.emailError =  'You must enter an email id.';
                        }else if (this.appFieldValidator.hasError('email')) {
                            // tslint:disable-next-line:max-line-length
                            this.errors.emailError = 'Email format is invalid! Email should be like abc@xyz.com'
                        }else {
                            this.errors.emailError = '';
                        }
                        break;

                    case 'password' :
                        if (this.appFieldValidator.hasError('required')) {
                            this.errors.passwordError = 'You must enter a password.';
                        } else if (this.appFieldValidator.hasError('pattern')) {
                            // tslint:disable-next-line:max-line-length
                            this.errors.passwordError = 'Password should be at least 6 character long and should contain an UpperCase and LowerCase Alphabet, Number and Special Character(!$%@#£€*?&).'
                        } else {
                            this.errors.passwordError = '';
                        }
                        break;
                }

            }
            }); // Loop ends once we found the control and validated it by setting the proper error message

        this.errorsModel.set(this.errors);
    }
}
