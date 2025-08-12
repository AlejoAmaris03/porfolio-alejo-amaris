import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tech-stack-card',
  imports: [],
  templateUrl: './tech-stack-card.html',
  styleUrl: './tech-stack-card.css'
})

export class TechStackCard {
  @Input() stack = {
    title: '',
    stack: ['']
  };
}
