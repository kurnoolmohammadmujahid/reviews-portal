import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  session: any
  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  exit() {
    sessionStorage.clear();
    this.route.navigate(['/login']);
  }

  ngDoCheck() {
    this.session = sessionStorage.getItem('id');
  }

}
