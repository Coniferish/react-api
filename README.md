# Welcome

## How to use this repo

This repo contains exercises for learning and practicing working with APIs in React.

The main branch has exercise prompts and solutions to the exercises are on individual branches. You can view the solutions and step through the development of them through the commit history by looking at the PRs on github. The diff will show you the code changes and the commit messages contain additional explanations. By reviewing the commits in order, you can follow the thought process and see how the solution evolved incrementally.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# React-Router

"React Router is the most popular routing library for React and can be paired with Vite to create a full-stack React framework." ([source](https://react.dev/learn/creating-a-react-app))

The documentation indicates that you will probably want to use a template for your project, but since this is a bare-bones project we'll actually use the "declarative mode" so that additional features such as state management for data loading or other features. ([source](https://reactrouter.com/start/modes))

## Installation

https://reactrouter.com/start/declarative/installation

`npm i react-router`

# TODOs

- Find or create a precommit hook to use AI to generate  commit messages"
- Write a build-time script to dynamically generate the list of exercises
- Add navigation for Previous/Next exercises on the exercise pages (in ExerciseWrapper)
