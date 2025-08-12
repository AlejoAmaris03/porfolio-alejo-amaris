import { Component } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIcon } from '@angular/material/icon';
import { ProjectCard } from '../../components';

@Component({
  selector: 'app-projects',
  imports: [
    MatTooltipModule,
    ProjectCard,
    MatIcon
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})

export default class Projects {
  protected slideIterations = Array(2);
  protected toolsImages = [
    { src: 'assets/images/java-icon.svg', alt: 'Java icon', matToolTip: 'Java' },
    { src: 'assets/images/spring-boot-icon.svg', alt: 'Spring Boot icon', matToolTip: 'Spring Boot' },
    { src: 'assets/images/angular-icon.svg', alt: 'Angular icon', matToolTip: 'Angular' },
    { src: 'assets/images/html-icon.svg', alt: 'HTML icon', matToolTip: 'HTML'},
    { src: 'assets/images/css-icon.svg', alt: 'CSS icon', matToolTip: 'CSS'},
    { src: 'assets/images/js-icon.svg', alt: 'JavaScript icon', matToolTip: 'JavaScript' },
    { src: 'assets/images/ts-icon.svg', alt: 'TypeScript icon', matToolTip: 'TypeScript' },
    { src: 'assets/images/mysql-icon.svg', alt: 'MySQL icon', matToolTip: 'MySQL' },
    { src: 'assets/images/postgresql-icon.svg', alt: 'PostgreSQL icon', matToolTip: 'PostgreSQL' },
    { src: 'assets/images/github-icon.svg', alt: 'GitHub icon', matToolTip: 'GitHub' }
  ];
  protected projects = [
    {
      name: `🌍 Job Board Platform`, 
      description: `
        Full-stack app with Angular and Spring Boot for job posting, search, and applications. 
        Supports JWT/Google auth, role-based access, and a PostgreSQL RESTful backend.`, 
      image: 'assets/images/job-board-project.png',
      link: 'https://github.com/AlejoAmaris03/JobBoard_Frontend'
    },
    {
      name: `🌍 Tourist Agency System`,
      description: `
        A full-stack tourist agency system with a Spring Boot backend and Angular frontend. 
        It enables customers and employees to manage, browse, and purchase tourism services 
        and travel packages.`, 
      image: 'assets/images/tourist-agency-project.png',
      link: 'https://github.com/AlejoAmaris03/TouristAgencyFrontend'
    },
    {
      name: `🏥 Hospital Management System`,
      description: `
        A complete hospital management system with a Spring Boot backend and Angular frontend. 
        It supports patient care workflows, medical service tracking, and role-based access for admins, 
        doctors, and patients.`, 
      image: 'assets/images/hospital-system-project.png',
      link: 'https://github.com/AlejoAmaris03/HospitalWebsiteFronted'
    },
    {
      name: `🛍️ E-Commerce`,
      description: `
        Developed a complete online store using Spring Boot and Angular. Implemented authentication, 
        dynamic cart management, and a clean architecture separating backend and frontend for scalability.`, 
      image: 'assets/images/ecommerce-project.png',
      link: 'https://github.com/AlejoAmaris03/FirstAngularProject_EcommerceFrontend'
    }
  ];

  protected slideLeft() {
    const projectsSlide = document.getElementById('projects-slider') as HTMLElement;
    projectsSlide.scrollLeft -= this.getProductSliderDimensions();
  }

  protected slideRight() {
    const projectsSlide = document.getElementById('projects-slider') as HTMLElement;
    projectsSlide.scrollLeft += this.getProductSliderDimensions();
  }

  private getProductSliderDimensions(): number {
    const productSliderDimensions = document.getElementById('projects-slider') as HTMLElement;
    return productSliderDimensions.getBoundingClientRect().width - 30;
  }
}
