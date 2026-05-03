# 🧠 Angular Task Manager

Aplicação web desenvolvida com Angular para gerenciamento de tarefas (CRUD), seguindo boas práticas de arquitetura front-end, programação reativa com RxJS e integração com API REST.

---

## 🚀 Visão Geral

Este projeto simula um cenário real de aplicação corporativa, com separação de responsabilidades, consumo de API e estrutura escalável baseada em módulos.

---

## 🔗 Demonstração

* 🌐 Frontend: *(adicione link do deploy — Vercel/Netlify)*
* 🔌 API: http://localhost:3000/tasks

---

## 📸 Preview

> ⚠️ Adicione prints reais aqui (isso aumenta MUITO sua taxa de aprovação)

---

## ⚙️ Stack Tecnológica

### 🖥️ Front-End

* Angular
* TypeScript
* JavaScript (ES6+)
* HTML5 (semântico)
* CSS3 (Flexbox / Grid / Responsivo)

### 🔄 Arquitetura e Padrões

* SPA (Single Page Application)
* Component-Based Architecture
* Separação por Features
* Clean Code

### 🔗 Integrações

* API REST (JSON Server)
* HttpClient (Angular)

### ⚡ Programação Reativa

* RxJS

  * Observables
  * Subscribe
  * Manipulação de fluxo assíncrono

### 🧪 Formulários

* Reactive Forms
* Validações básicas

### 🛠️ Ferramentas

* Git / GitHub
* Angular CLI

---

## 🏗️ Arquitetura do Projeto

```bash
src/app/
 ├── core/
 │    └── services/
 │
 ├── features/tasks/
 │    ├── components/
 │    │    ├── task-list/
 │    │    └── task-form/
 │    ├── pages/
 │    ├── models/
 │    └── tasks.module.ts
 │
 ├── shared/
 └── app-routing.module.ts
```

---

## ✨ Funcionalidades

* ✔️ Listagem de tarefas
* ✔️ Criação de tarefas
* ✔️ Atualização de status (concluído/pendente)
* ✔️ Exclusão de tarefas
* ✔️ Integração com API REST
* ✔️ Interface dinâmica (SPA)
* ✔️ Uso de RxJS para controle de dados assíncronos

---

## 🔄 Fluxo da Aplicação

1. Usuário interage com a interface
2. Componentes Angular disparam ações
3. Services consomem API via HttpClient
4. RxJS gerencia o fluxo assíncrono
5. UI é atualizada automaticamente

---

## 📡 Backend (Fake API)

Utilizado JSON Server para simulação de backend.

### 📁 Estrutura do `db.json`

```json
{
  "tasks": []
}
```

---

## ▶️ Como Executar

### 🔧 Pré-requisitos

* Node.js
* Angular CLI

```bash
npm install -g @angular/cli
```

---

### 📦 Instalação

```bash
git clone https://github.com/seu-usuario/angular-task-manager.git
cd angular-task-manager
npm install
```

---

### ▶️ Rodar aplicação

```bash
ng serve
```

Acesse:

```
http://localhost:4200
```

---

### ▶️ Rodar API fake

```bash
npm install -g json-server
json-server --watch db.json
```

Acesse:

```
http://localhost:3000/tasks
```

---

## 📈 Melhorias Planejadas

* 🔐 Autenticação com JWT
* 🛡️ Guards de rota
* ⚡ Interceptor HTTP (loading + erro)
* 🔍 Filtro de tarefas
* 📊 Paginação
* 🌙 Dark Mode
* ♿ Acessibilidade (A11Y)

---

## 🧠 Conceitos Demonstrados

* Arquitetura Angular modular
* Programação reativa com RxJS
* Consumo de APIs REST
* Gerenciamento de estado simples
* Organização de código escalável

---

## 👨‍💻 Autor

**Erick José Vieira**

* 🔗 LinkedIn: https://www.linkedin.com/in/erickvieira-frontend
* 🔗 GitHub: *(adicione aqui)*

---

## 📄 Licença

Projeto desenvolvido para fins educacionais e demonstração de habilidades técnicas.
