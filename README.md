# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
# ########## GIT ##########
- git init
- git remote add origin https://github.com/LinhNguyenDuc2002/my-react-app.git
- git status
- git add
- git commit -m "init"
- git branch -M main
- git branch
- git push -u origin main

# ########## NOTE ##########
- Create a React project with Vite using Typescript: npm create vite@latest my-react-app -- --template react-ts
  Vite: A build tool used to develop web app
  Node: A JavaScript runtime environment
  npm (Node Package Manager): A package manager for Node.js
  React: A JavaScript library developed by Facebook

- Install essential dependencies: npm install
- Run on dev environment: npm run dev
- Install Ant Design: npm install antd
- Install Emotion: npm install @emotion/react @emotion/styled
- Install React-JSS: npm install react-jss
- Install React-i18next: npm install react-i18next i18next

- Fetch API, Axios and React Query
  Fetch API:
  + Available in the browser without additional installation
  + Easy to use
  + No automatic JSON conversion support 
  + No state management, caching or retry
  + Requires manual error handling and advanced features

  Axios:
  + Provides many useful features such as automatic JSON data conversion, timeout configuration and support for canceling requests
  + Requires additional installation, not available in browsers
  + Can be larger in size than fetch

  React Query:
  + Manage state and caching for data from the server automatically
  + Supports easy fetching, caching, updating, and syncing of data to the server
  + Provides features like pagination, lazy loading, and retry requests
  + Requires additional setup
  + Can be more complex for simple requests than Fetch or Axios

