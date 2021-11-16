import { Component, OnInit } from '@angular/core';
import { ISourceOptions } from 'tsparticles';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  goToPage(pageName: string) : void {
    this.router.navigate(['${pageName']);
  }

}
