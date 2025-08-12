import { Component } from '@angular/core';
import { TechStackCard } from '../../components';

@Component({
  selector: 'app-about',
  imports: [
    TechStackCard
  ],
  templateUrl: './about.html',
  styleUrl: './about.css'
})

export default class About {
  protected profile = {
    name: "Alejandro",
    role: "I'm a backend developer based in Colombia",
    avatar: "assets/images/avatar.png",
    welcomeMessage: "Hello!",
    descriptionParagrahp1: 
      `Technologist in Data Systematization from Francisco José de Caldas District University, with 
      solid skills in Java (Spring Boot), JavaScript, MySQL y PostgreSQL, as well as front-end technologies 
      like Angular, HTML, and CSS. Experienced in teamwork, problem-solving, and the effective use of computer 
      tools.`,
    descriptionParagrahp2: 
      `My objective is to join a company where I can apply my knowledge, grow professionally, and contribute 
      meaningfully to the organization’s goals.`,
  };
  protected techStack = [
    {
      title: 'Languages',
      stack: ['Java', 'JavaScript', 'TypeScript', 'SQL']
    },
    {
      title: 'Frameworks',
      stack: ['Spring Boot with Java', 'Angular']
    },
    {
      title: 'Databases',
      stack: ['SQL', 'MySQL', 'PostgreSQL']
    },
    {
      title: 'Other tools',
      stack: ['REST APIs', 'Git/GitHub', 'Jira']
    }
  ];
}
