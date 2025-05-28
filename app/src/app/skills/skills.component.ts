import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  template: `
    <h2>Habilidades 🛠️</h2>
    <ul>
      <li>DevOps: Ansible, Jenkins, pipelines CI/CD, GitHub Actions, GitLab Pipelines ⚙️</li>
      <li>Cloud: AWS (avançado) ☁️, Azure e GCP (experiência breve)</li>
      <li>Programação: Python, Go, Node.js, Java, JavaScript 💻</li>
      <li>Containers e Orquestração: Docker 🐳, Kubernetes</li>
      <li>Infraestrutura como Código: Terraform</li>
      <li>Linux, operação de servidores 🖥️</li>
      <li>Conhecimento básico em programação de IA 🤖</li>
      <li>Trabalho em equipe, automação de processos, entrega de soluções de valor 🤝</li>
    </ul>
  `,
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

}
