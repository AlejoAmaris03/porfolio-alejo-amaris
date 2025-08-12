import { Component } from '@angular/core';
import { Navbar, Footer } from "../../shared";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-public-layout',
  imports: [
    Navbar,
    RouterOutlet,
    Footer
],
  templateUrl: './public-layout.html',
  styleUrl: './public-layout.css'
})

export default class PublicLayout {

}
