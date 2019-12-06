import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DisplayUserService } from '../display-user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  // declaring the form
  userForm: FormGroup;
  // declaring all the variables
  sno: number;
  name: string;
  email: string;
  imageurl: string;
  nofreps: number;



  constructor(private _route: ActivatedRoute, private fb: FormBuilder, private $userService: DisplayUserService,
              private _router: Router) { }

  ngOnInit() {
    // get the particular user by the Serial no in the params
    this.getUser(this._route.snapshot.params['sno'])

    // Form builder to get and empty form with the reauired details of the user
    this.userForm = this.fb.group({
      'sno': ['', Validators.required],
      'name': ['', Validators.required],
      'email': ['', Validators.required],
      'imageurl': ['', Validators.required],
      'nofreps': ['', Validators.required]
    })
  }

  // fill in the form with the details by fethig them from the DB
  getUser(id: number){
    this.$userService.getUser(id).subscribe(data => {
      this.userForm.setValue({
      'sno' : data.sno,
      'name' : data.name,
      'email' : data.email,
      'imageurl' : data.imageurl,
      'nofreps' : data.nofreps
    });
  })
  }

  // Capture the save button click and update the details by a put call request
  onSave(){
    this.$userService.updateUser(this.userForm.value)
      .subscribe(res => console.log(res), err => console.log(err));
    this._router.navigate(['/home']);
  }
  // Capture the delete btton event and delete that particular user using a http delete call request
  onDelete(){
    this.$userService.deleteUser(this.userForm.value)
    .subscribe(res => console.log('user Deleted', res), err => console.log(err));
    this._router.navigate(['/home']);

  }

}
