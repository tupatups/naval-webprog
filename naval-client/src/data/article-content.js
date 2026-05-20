export const articles = [
  {
    name: "what-is-react",
    title: "What is React?",
    imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
    content: [
      "React is a JavaScript library developed by Meta for building user interfaces, especially single-page applications.",
      "It uses a component-based architecture, meaning the UI is broken into small, reusable pieces called components.",
      "React relies on a Virtual DOM to efficiently update only the parts of the page that changed, making it very fast.",
      "Example:\nfunction App() {\n  return <h1>Hello, React!</h1>;\n}"
    ]
  },
  {
    name: "understanding-jsx",
    title: "Understanding JSX",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    content: [
      "JSX stands for JavaScript XML. It allows you to write HTML-like syntax directly inside JavaScript files.",
      "JSX is not valid JavaScript on its own — it gets compiled to React.createElement() calls by a tool like Babel.",
      "You can embed JavaScript expressions inside JSX using curly braces: {expression}.",
      "Example:\nconst name = 'Juan';\nreturn <h1>Hello, {name}!</h1>;"
    ]
  },
  {
    name: "react-hooks-intro",
    title: "Introduction to React Hooks",
    imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
    content: [
      "Hooks are special functions that let functional components use React features like state and side effects.",
      "The most common hooks are useState, useEffect, useContext, and useRef.",
      "useState lets you add a state variable to a functional component without writing a class.",
      "Example:\nconst [count, setCount] = useState(0);\nreturn <button onClick={() => setCount(count + 1)}>Count: {count}</button>;"
    ]
  },
  {
    name: "props-and-components",
    title: "Props and Component Communication",
    imageUrl: "https://images.unsplash.com/photo-1520869562399-e772f042f422?w=800&q=80",
    content: [
      "Props (short for properties) are the way parent components pass data down to child components.",
      "Props are read-only — a child component should never modify the props it receives.",
      "You can pass any JavaScript value as a prop: strings, numbers, arrays, objects, or even functions.",
      "Example:\nfunction Greeting({ name }) {\n  return <p>Hello, {name}!</p>;\n}\n<Greeting name='Maria' />"
    ]
  },
  {
    name: "react-router-navigation",
    title: "Client-Side Navigation with React Router",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    content: [
      "React Router is a library that enables navigation between pages in a React app without full page reloads.",
      "You define routes using createBrowserRouter and render them with RouterProvider.",
      "Dynamic routes use a colon prefix like /articles/:name to capture URL parameters.",
      "Example:\n{ path: '/articles/:name', element: <ArticlePage /> }"
    ]
  }
];