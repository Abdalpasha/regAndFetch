import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CreateUserService } from '../create-user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  registerUser: FormGroup;

  constructor(private fb: FormBuilder, private $auth: CreateUserService, private _router: Router, private _route: ActivatedRoute ) { }

  ngOnInit() {
    // Form builder
    this.registerUser = this.fb.group({
      sno: [''],
      name: [''],
      email: [''],
      imageurl: [''],
      nofreps: ['']
    });


    this._route.paramMap.subscribe(parameterMap => {
      const id = +parameterMap.get('sno');
    });
  }

  // By capturing the click event the data is sent to DB by Subcribe to the registeruser observable.
  onSubmit(){
    this.$auth.createUser(this.registerUser.value)
    .subscribe(res => console.log(res),
      err => console.log(err));
    this._router.navigate(['home'])
  }

}
