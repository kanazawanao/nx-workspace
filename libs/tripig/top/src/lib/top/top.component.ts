import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FireAuthService } from '@workspace/shared-service';

@Component({
  selector: 'workspace-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss'],
})
export class TopComponent implements OnInit {
  constructor(private router: Router, private authService: FireAuthService) {}
  formGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  ngOnInit(): void {
    // ログイン認証済みならprojectページに飛ばす
    this.authService.user.subscribe((u) => {
      if (u) {
        this.router.navigate(['/projects']);
      }
    });
  }

  signInOrSignUp() {
    this.authService
      .isRegistedEmail(this.formGroup.controls['email'].value)
      .then((result) => {
        if (result) {
          // ログイン画面へ繊維
          console.log('登録済みメールアドレス');
          this.router.navigate(['/signin'], {
            queryParams: { email: this.formGroup.controls['email'].value },
          });
        } else {
          // 登録画面へ繊維
          console.log('未登録メールアドレス');
          this.router.navigate(['/signup'], {
            queryParams: { email: this.formGroup.controls['email'].value },
          });
        }
      });
  }

  googleSignIn() {
    this.authService
      .googleSignIn()
      .then((result) => {
        if (result) {
          this.router.navigate(['/projects']);
        } else {
          console.log('ログイン失敗');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // 未実装
  facebookSignIn() {
    this.authService.facebookSignIn().then(() => {
      // ユーザー登録する
    });
  }

  // 未実装
  twitterSignIn() {
    this.authService.twitterSignIn();
  }

  // 未実装
  appleSignIn() {}
}
