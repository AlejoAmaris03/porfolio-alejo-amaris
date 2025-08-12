import { Component } from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'app-footer',
  imports: [
    MatTooltip
  ],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})

export class Footer {
  protected links = [
    {
      href: 'assets/static-files/CV - Alejandro Amaris.pdf',
      src: 'assets/images/cv-icon.png',
      alt: 'CV icon',
      matTooltip: 'CV'
    },
    {
      href: 'https://github.com/AlejoAmaris03',
      src: 'assets/images/github-icon.svg',
      alt: 'GitHub icon',
      matTooltip: 'GitHub'
    },
    {
      href: 'https://www.linkedin.com/in/alejandro-amaris-709471312/',
      src: 'assets/images/linkedin-icon.svg',
      alt: 'LinkedIn icon',
      matTooltip: 'LinkedIn'
    }
  ]
}
