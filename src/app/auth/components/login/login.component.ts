import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthenticateModel } from '@shared/models/authenticate-model';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userLogin = new AuthenticateModel();
  errorMsg = '';
  returnUrl: string;
  submitted = false;

  constructor(private authSvc: AuthService,  private route: ActivatedRoute, private router: Router) {

   }

  ngOnInit() {
    // get return url from route parameters or default to '/'
    // tslint:disable-next-line:no-string-literal
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onSubmit() {
    this.submitted = true;

    this.authSvc.login(this.userLogin.Username, this.userLogin.Password).subscribe( r => {
      this.router.navigate(['/home']);
    },
    error => {
      this.submitted = false;
      this.errorMsg = error.message;
    });
  }

}
