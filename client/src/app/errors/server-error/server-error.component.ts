import { AccountService } from './../../_services/account.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-error',
  templateUrl: './server-error.component.html',
  styleUrls: ['./server-error.component.css']
})
export class ServerErrorComponent implements OnInit {
  error: any;
  devException = false;

  constructor(private router: Router, public accountService: AccountService) {
    const navigation = this.router.getCurrentNavigation();
    this.error = navigation?.extras?.state?.error;
   }

  ngOnInit(): void {
  }

  redirectHome() {
    this.accountService.redirectHome();
  }

  getDevException() {
    this.devException = true;
  }
}
