import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    RouterLink
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})

export default class Home {
  protected profile = {
    name: "Alejandro",
    role: "A backend developer",
    avatar: "assets/images/avatar.png",
    welcomeMessage: "Welcome!",
    techIcons: [
      { src: "assets/images/spring-boot-icon.svg", alt: "Spring boot icon", class: "spring-boot-icon" },
      { src: "assets/images/angular-icon.svg", alt: "Angular icon", class: "angular-icon" },
    ],
    descriptionTitle: "Never stop learning!",
    descriptionParagraph1:
      `I'm passionate about learning something new every day. Technology moves fast, and I enjoy keeping up, whether 
      it's improving my skills in Spring Boot, diving deeper into Angular, or just exploring new tools out of curiosity.`,
    descriptionParagraph2: `For me, learning isn't a goal, it's part of the process of becoming better at what I do.`,
    descriptionImage: "assets/images/code-example.png",
  };
}
