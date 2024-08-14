import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersService } from 'src/app/shared/services/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/shared/interfaces/user';


@Component({
  selector: 'app-user-data',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent implements OnInit {
  
  constructor(
    private _UsersService:UsersService,
    private _ActivatedRoute:ActivatedRoute,
    private _Router:Router,
  ){}

  userId!:string | null;
  userData:User = {} as User

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(params)=>{
        this.userId = params.get('id')        
      }
    })

    this._UsersService.getUserData(Number(this.userId)).subscribe({
      next:(response)=>{
        // console.log(response.data);
        this.userData = response.data
      }
    })
  }


  backToUsers():void{
    this._Router.navigate(['/home'])
    
  }



}
