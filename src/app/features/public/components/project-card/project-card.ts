import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css'
})

export class ProjectCard {
  @Input() project = {
    name: '',
    description: '',
    image: '',
    link: ''
  }

  protected goToLink(link: string) {
    window.open(link, '_blank');
  }
}
