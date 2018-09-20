import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
this.logout();
  }


  logout() {
    console.log('logging out')
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
}
}
