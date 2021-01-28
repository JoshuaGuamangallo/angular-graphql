import { Response } from './../models/responseUser.model';
import { GET_USERS, ADD_USER, DELETE_USER } from './../services/user.graphql';
import { UserModel } from './../models/user.model';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Apollo } from 'apollo-angular';
import {map} from 'rxjs/operators'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: Observable<UserModel[]> | undefined;
  form: FormGroup;
  createUser: UserModel;

  constructor(private apollo: Apollo, private fb: FormBuilder) { 
    this.form = this.fb.group({
      name: new FormControl("",Validators.required),
      email: new FormControl("",Validators.required),
      age: new FormControl("",Validators.required),
      address: new FormControl("",Validators.required),
      phone: new FormControl("",Validators.required),
    })
    this.createUser = {};
  }

  ngOnInit() {
    this.synch();
  }

  synch(): void {
    this.users = this.apollo.watchQuery<Response>({
      query: GET_USERS,
    }).valueChanges.pipe(
      map((result) => result.data.getUsers)
    );
  }

  CreateUser():void{
    this.apollo.mutate(
      {
        mutation: ADD_USER,
        variables: this.createUser
      }
    ).subscribe(({data})=>
      this.synch(),
    ), () => alert("error")
    
  }
  DeleteUser(idUser: string):void{
    const dataDelete = {id: idUser}
    this.apollo.mutate(
      {
        mutation: DELETE_USER,
        variables: dataDelete
      }
    ).subscribe(({data})=>
      this.synch(),
    ), () => alert("error")
    
  }
}
