# React Context Tutorial

## Overview

In this tutorial, we'll explore how to implement **React Context** in a React application to solve the issue of **prop drilling**. Prop drilling occurs when data is passed through multiple components in a component tree, making the code harder to manage and scale. With React Context, we can share state across components without passing props down manually at every level.

### Prerequisites

- Basic knowledge of React components, state, and props.
- Familiarity with JavaScript ES6+ features.
- Knowledge of using Vite (or Create React App) to set up a React project.

### Project Structure

This project is structured with an `App` component that renders two child components: `Home` and `Profile`. We'll introduce React Context to manage and share state between these components without passing props.

### What You'll Learn

- How to create and use a React Context.
- The benefits of Context over prop drilling.
- How to wrap your components in a Context Provider.
- How to consume the context in child components using `useContext`.

## Steps

### 1. Project Setup

We start with a basic React project. In this tutorial, we’ll use **Vite** to quickly scaffold the project, but you can use any setup you prefer. The `App` component renders two simple components: `Home` and `Profile`, with basic CSS already applied.

### 2. Creating the Context

We will create an `AuthContext` using `createContext()` to store a `username` that we can share between the `Home` and `Profile` components.

### 3. Setting Up the Provider

Next, we'll create an `AuthProvider` component that will manage the `username` state and wrap the `App` component. This allows any nested components to consume the context data.

### 4. Consuming the Context

In the `Home` and `Profile` components, we'll use the `useContext` hook to access the `username` from `AuthContext` and display it in our UI. This eliminates the need to pass `username` as a prop.

## Code Snippets

### `AuthProvider.js`

```jsx
import React, { useState, createContext } from 'react';

export const AuthContext = createContext();

export default function AuthProvider(props) {
    const [username, setUsername] = useState("Bruce Banner");

    return (
        <AuthContext.Provider value={{ username }}>
            {props.children}
        </AuthContext.Provider>
    );
}
# context-tutorial
