import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App{
  constructor(private router: Router, private myService: AppService){

  }

  func(): void {
    this.router.navigate(['rest', 15]);
  }
}
