# Welcome

## How to use this repo

This repo contains exercises for learning and practicing working with APIs in React.

The main branch has exercise prompts and solutions to the exercises are on individual branches. You can view the solutions and step through the development of them through the commit history by looking at the PRs on github. The diff will show you the code changes and the commit messages contain additional explanations. By reviewing the commits in order, you can follow the thought process and see how the solution evolved incrementally.

# Background for how this project is set up
## React + Vite

This project was set up with Vite and its React template. This provides a minimal setup to get React working with:

- **HMR (Hot Module Replacement)** - Updates your browser instantly when you save files
- **Simple configuration** - See `vite.config.js` for the minimal setup
- **Fast Refresh** - Edit React components without losing state
- **Optimized bundling** - For production builds via `npm run build`

The project uses the `@vitejs/plugin-react` plugin to handle JSX transformation and Fast Refresh.

## React Router

"React Router is the most popular routing library for React" ([source](https://react.dev/learn/creating-a-react-app)). It allows you to create multiple views/pages in your single-page application and navigate between them without full page reloads.

React Router can be used in two ways:
- **Framework mode** (like Remix) - includes data loading, server-side rendering, and other full-stack features
- **Declarative mode** - a lightweight library for client-side routing only

**For this project, we're using declarative mode** to keep things simple and focused on the basics of React and routing, without additional features like built-in state management or data loading patterns.

### Installation

https://reactrouter.com/start/declarative/installation

`npm i react-router`

After installation, you set up routes using components like `<BrowserRouter>`, `<Routes>`, and `<Route>`.

### Why React Router?

Without a routing library, you'd need to manually:
- Parse the URL to determine what to show
- Handle browser back/forward buttons
- Update the URL when navigating
- Manage navigation state

# TODOs

- Find or create a precommit hook to use AI to generate  commit messages
- Write a build-time script to dynamically generate the list of exercises
- Add navigation for Previous/Next exercises on the exercise pages (in ExerciseWrapper)
- Review ESLint configuration
