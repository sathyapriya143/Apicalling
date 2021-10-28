import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MustMatch } from 'src/app/must-match.validators';
import { ApiService } from 'src/app/service/api.service';
import { Model } from './model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers: []
})
export class AddComponent implements OnInit {
  isAddMode!: boolean;
  userForm!: FormGroup;
  stateOptions: string[] = [];
  editIndex: any;
  list!: any[];
  id: any;
  route: any;
  ModelObj: Model = new Model();

  constructor(private formBuilder: FormBuilder, private api: ApiService, private router: Router) { }

  ngOnInit(): void {


    const passwordValidators = [Validators.minLength(6)];
    if (this.isAddMode) {
      passwordValidators.push(Validators.required);
    }
    this.userForm = this.formBuilder.group({
      title: ["", Validators.required],
      username: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email, Validators.minLength(5)]],
      password: [" ", [Validators.minLength(6), Validators.required, Validators.nullValidator]],
      confirmpassword: [" ", [Validators.required, Validators.nullValidator]],
      address: this.formBuilder.group({
        city: [""],
        state: [""],
        country: [""],
      }),


    },
    

      {
        AbstractControlOptions: { validators: MustMatch('password', 'confirmPassword') },
      });

    this.stateOptions = ["TN", "DL", "MU", "KL"];

  }
  get f(): { [key: string]: AbstractControl } {
    return this.userForm.controls;
  }

  postUserDetails() {
    this.ModelObj.title = this.userForm.value.title;
    this.ModelObj.username = this.userForm.value.username;
    this.ModelObj.email = this.userForm.value.email;
    this.ModelObj.password = this.userForm.value.Password;
    this.ModelObj.country = this.userForm.value.country;
    this.api.postUsers(this.ModelObj).subscribe(() => {
      this.cacnel();
    }, () => {
      alert("something went wrong");
    });
  }

  clear() {
    this.userForm.reset();
  }

  cacnel() {
    this.router.navigate(['./data']);
  }
}
