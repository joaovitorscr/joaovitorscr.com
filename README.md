![joaovitorscr Portfolio](https://github.com/joaovitorscr/portfolio/blob/main/public/assets/portfolio-store.png)

# joaovitorscr Portfolio

I developed my own portfolio to showcase my skills and habilities to possible clients and employers.



## Tech Stack

React 18, TailwindCSS, Shadcn UI.

## Run Locally

Check if you have installed Node.js 18+, if not you can install with this [link.](https://nodejs.org/pt/download/package-manager)

Clone the project:

```bash
  git clone git@github.com:joaovitorscr/portfolio.git

  or

  git clone https://github.com/joaovitorscr/portfolio.git

  or

  gh repo gh repo clone joaovitorscr/portfolio
```

Enter the created directory.

```bash
  cd portfolio
```

Install dependencies.

```bash
  npm install

  or

  yarn install

  or

  pnpm install
```

Start the app.

```bash
  npm run build && npm run start

  or

  yarn build && yarn start

  or

  pnpm build && pnpm start
```


## Project Structure

.  
├── index.html  
├── package.json  
├── pnpm-lock.yaml  
├── postcss.config.js  
├── public  
│   ├── assets  
│   │   └── img  
│   │       ├── flags  
│   │       │   ├── br.svg  
│   │       │   └── us.svg  
│   │       ├── profile-link-icons  
│   │       │   ├── github.tsx  
│   │       │   └── linkedin.tsx  
│   │       ├── projects  
│   │       │   └── cash-app.png  
│   │       └── skills-icons  
│   │           ├── hard-skills  
│   │           │   ├── angular.svg  
│   │           │   ├── docker.svg  
│   │           │   ├── git.svg  
│   │           │   ├── javascript.svg  
│   │           │   ├── linux.svg  
│   │           │   ├── mysql.svg  
│   │           │   ├── next.svg  
│   │           │   ├── node.svg  
│   │           │   ├── postgre.svg  
│   │           │   ├── react.svg  
│   │           │   ├── sass.svg  
│   │           │   ├── tailwind.svg  
│   │           │   └── typescript.svg  
│   │           └── soft-skills  
│   │               ├── attention-to-detail.svg  
│   │               ├── communication.svg  
│   │               ├── creativity.svg  
│   │               ├── fast-learner.svg  
│   │               ├── problem-solving.svg  
│   │               ├── team-work.svg  
│   │               └── time-management.svg  
│   └── letter-j.svg  
├── README.md  
├── src  
│   ├── app  
│   │   ├── App.tsx  
│   │   ├── index.css  
│   │   └── types  
│   │       ├── data  
│   │       │   └── personal-data.ts  
│   │       ├── education.ts  
│   │       ├── experience.ts  
│   │       ├── language.ts  
│   │       ├── personal-info.ts  
│   │       ├── project.ts  
│   │       └── skill.ts  
│   ├── components  
│   │   ├── sections  
│   │   │   ├── education.tsx  
│   │   │   ├── experience.tsx  
│   │   │   ├── hard-skills.tsx  
│   │   │   ├── languages.tsx  
│   │   │   ├── projects.tsx  
│   │   │   ├── sidebar.tsx  
│   │   │   └── soft-skills.tsx  
│   │   ├── ThemeProvider.tsx  
│   │   ├── ui  
│   │   │   ├── alert-dialog.tsx  
│   │   │   ├── button.tsx  
│   │   │   ├── card.tsx  
│   │   │   ├── carousel.tsx  
│   │   │   ├── dropdown-menu.tsx  
│   │   │   ├── project-card.tsx  
│   │   │   ├── section-border.tsx  
│   │   │   └── skills-card.tsx  
│   │   └── wrappers  
│   │       └── locale-switch.tsx  
│   ├── data.json  
│   ├── dictionaries  
│   │   ├── en.json  
│   │   └── pt.json  
│   ├── i18n.ts  
│   ├── lib  
│   │   └── utils.ts  
│   ├── main.tsx  
│   └── vite-env.d.ts  
├── tailwind.config.ts  
├── tsconfig.json  
├── tsconfig.node.json  
└── vite.config.ts  
