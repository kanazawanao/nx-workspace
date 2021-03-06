import { SignUpControlName } from './sign-up-control-name';
import { SignUpService } from './sign-up.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from '@workspace/api-interfaces';

@Component({
  selector: 'workspace-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private signUpService: SignUpService
  ) {}

  formGroup: FormGroup;
  controlName = SignUpControlName;

  ngOnInit(): void {
    this.formGroup = this.signUpService.generateFormGroup(
      this.route.snapshot.queryParams['email']
    );
  }

  signUpEvent() {
    this.signUpService.signUp(this.formToUser()).subscribe(() => {
      this.router.navigate(['/info']);
    });
  }

  private formToUser(): IUser {
    const user: IUser = {
      email: this.formGroup.get(this.controlName.email).value,
      password: this.formGroup.get(this.controlName.password).value,
      firstName: this.formGroup.get(this.controlName.firstName).value,
      lastName: this.formGroup.get(this.controlName.lastName).value,
      birthDay: this.formGroup.get(this.controlName.birthDay).value,
      sex: '',
      address: '',
      graduationDate: this.formGroup.get(this.controlName.graduationDate).value,
      qualification: '',
    };

    return user;
  }
}
