# Portfólio Pessoal em Angular

Este projeto é um portfólio pessoal desenvolvido com Angular, pronto para ser publicado no GitHub Pages.

## Como rodar localmente

1. Instale as dependências:
   ```bash
   cd app
   npm install
   ```
2. Rode o servidor de desenvolvimento:
   ```bash
   ng serve
   ```
3. Acesse `http://localhost:4200` no navegador.

## Como publicar no GitHub Pages

1. Gere a build de produção na pasta `docs`:
   ```bash
   ng build --output-path ../docs --base-href /portifolio/
   ```
2. Volte para a raiz do projeto, faça commit e push das alterações para o GitHub.
3. No GitHub, ative o GitHub Pages na branch `main` usando a pasta `/docs` como fonte.

---

Licença: MIT
