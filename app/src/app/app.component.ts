import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, AboutComponent, ProjectsComponent, SkillsComponent, ContactComponent],
  template: `
    <div class="fullpage-container">
      <app-about class="fullpage-section"></app-about>
      <app-projects class="fullpage-section"></app-projects>
      <app-skills class="fullpage-section"></app-skills>
      <app-contact class="fullpage-section"></app-contact>
    </div>
    <div class="scroll-buttons">
      <button class="scroll-btn" (click)="scrollToTop()" aria-label="Ir para o topo">
        <img src="/seta.png" alt="Seta para cima" class="arrow-icon up" />
      </button>
      <button class="scroll-btn" (click)="scrollToBottom()" aria-label="Ir para o final">
        <img src="/seta.png" alt="Seta para baixo" class="arrow-icon down" />
      </button>
    </div>
  `,
  styleUrls: ['./app.component.css'],
  standalone: true
})
export class AppComponent {
  theme = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
  menuOpen = false;

  constructor() {
    document.body.setAttribute('data-theme', this.theme);
    // Atualiza o tema se o usuário mudar a preferência do sistema
    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        this.theme = e.matches ? 'dark' : 'light';
        document.body.setAttribute('data-theme', this.theme);
      });
    }
  }

  toggleTheme() {
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-theme', this.theme);
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  scrollToTop() {
    const container = document.querySelector('.fullpage-container');
    if (container) {
      (container as HTMLElement).scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
  scrollToBottom() {
    const container = document.querySelector('.fullpage-container');
    if (container) {
      (container as HTMLElement).scrollTo({ top: (container as HTMLElement).scrollHeight, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
  }

  ngAfterViewInit() {
    this.activateSectionOnScroll();
    window.addEventListener('scroll', this.activateSectionOnScroll);
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.activateSectionOnScroll);
  }

  activateSectionOnScroll = () => {
    const sections = document.querySelectorAll('.fullpage-section');
    const scrollY = window.scrollY;
    const windowH = window.innerHeight;
    sections.forEach((section: any) => {
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top + scrollY;
      if (scrollY + windowH / 2 >= sectionTop && scrollY + windowH / 2 < sectionTop + section.offsetHeight) {
        section.classList.add('active');
      } else {
        section.classList.remove('active');
      }
    });
  }
}
