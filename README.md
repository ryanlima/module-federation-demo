# 🧩 Microfrontends com Module Federation + Vite

Este projeto é uma demonstração prática de como utilizar **Module Federation** com **Vite** e **React** para compor uma aplicação em microfrontends.

## 📁 Estrutura do Projeto

module-federation-demo/

├── dashboard/ # Aplicação principal (host)

├── user_profiles/ # Módulo remoto 1

└── notifications/ # Módulo remoto 2

---

# 🚀 Como rodar localmente

## 1. Clone o repositório

```bash
git clone https://github.com/ryanlima/module-federation-demo.git
cd module-federation-demo
```

## 2. Instale as dependências

#### Você pode rodar os comandos abaixo em cada subpasta (host-dashboarding, remote-user_profiles, remote-notifications).

cd host-dashboarding
npm install

cd ../remote-user_profiles
npm install

cd ../remote-notifications
npm install

## 3. Rode os remotes (build + preview)

### Remote: user_profiles

cd remote-user_profiles

npm run build

npm run preview -- --port 5001

### Remote: notifications

cd ../remote-notifications

npm run build

npm run preview -- --port 5002

## 4. Rode o host em modo dev

cd ../dashboard

npm run dev -- --port 5000

Acesse: http://localhost:5000

Obs: É importante rodar os remotes primeiro para que o host consiga consumir os módulos remotos corretamente.

## 🧠 O que está sendo demonstrado

Uso do @originjs/vite-plugin-federation para integração entre múltiplas aplicações.

Compartilhamento de dependências (react, react-dom) entre os módulos.

Carregamento dinâmico de componentes expostos em tempo de execução (remoteEntry.js).

### 🛠️ Tecnologias usadas

[Vite](https://vite.dev/)

[React](https://react.dev/)

[vite-plugin-federation (by OriginJS)](https://github.com/originjs/vite-plugin-federation)

### 📚 Referência

Este projeto foi baseado no excelente artigo da Nonstopio:

[A Deep Dive into Module Federation in Front-end with React + Vite](https://blog.nonstopio.com/a-deep-dive-into-module-federation-in-front-end-with-react-vite-37d17dd253a1)
por Nonstopio Technologies

Fiz algumas adaptações para estrutura em monorepo e publicação no GitHub com fins de estudo e demonstração.
