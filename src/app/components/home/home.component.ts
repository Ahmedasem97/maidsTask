import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersService } from 'src/app/shared/services/users.service';
import { User } from 'src/app/shared/interfaces/user';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from 'src/app/shared/pipes/search.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, NgxPaginationModule, FormsModule , SearchPipe],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private _UsersService: UsersService) { }

  users: User[] = [];
  // nameFiltration: User[] = [];
  pageSize: number = 0
  total: number = 0
  currentPage: number = 1


  searchTerm: string = ''

  ngOnInit(): void {
    this._UsersService.getUsers().subscribe({
      next: (response) => {
        // console.log(response);
        this.users = response.data;
        // this.nameFiltration = this.users
        this.pageSize = response.per_page;
        this.total = response.total;
        this.currentPage = response.page
      },
      error: (err) => {
        console.log(err);
      }
    })
  }


  pageChanged(event: any): void {
    console.log(event);
    this._UsersService.getUsers(event).subscribe({
      next: (response) => {
        this.users = response.data;
        // this.nameFiltration = this.users
        this.pageSize = response.per_page;
        this.total = response.total;
        this.currentPage = response.page
      },
      error: (err) => {
        console.log(err);
      }
    })

  }


  // userSearch(): void {
  //   this.nameFiltration = this.users.filter((user) => {
  //     return user.first_name.toLowerCase().includes(this.searchTerm.toLowerCase())
  //   })

  //   console.log(this.searchTerm);

  //   // console.log(this.users);

  // }


}
