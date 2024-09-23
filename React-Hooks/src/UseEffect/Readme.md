# useEffect

useEffect is a powerful and essential hook in React for managing side effects (like data fetching, subscriptions, timers, etc.) in function components. Here's a breakdown of all the important points you need to keep in mind when using useEffect:

1. Purpose of useEffect
   Side effects: useEffect is used to handle side effects such as API calls, subscriptions, modifying the DOM, or setting up event listeners that are not directly related to rendering.
   Post-render actions: It runs after the component has rendered, ensuring that side effects don’t block the rendering process.

2. The Dependency Array

- Empty array []: When an empty array is passed as the second argument, the effect runs only once when the component mounts (like componentDidMount in class components). It will not run again unless the component unmounts.

```js
useEffect(() => {
  // Effect logic here
}, []); // Runs only once when component mounts
```

- Dependencies: When you provide values in the array (e.g., [count, user]), the effect runs every time one of these dependencies changes. React compares the current and previous values to determine if an effect should re-run.

```js
useEffect(() => {
  // Runs only if 'count' or 'user' changes
}, [count, user]);
```

- No array: If you don't pass a second argument, the effect runs after every render, leading to potential performance issues or infinite loops.

```js
useEffect(() => {
  // Runs after every render
});
```

3. Effect Cleanup (Optional)

You can return a cleanup function inside the useEffect hook. This cleanup runs when the component unmounts, or before the effect re-runs due to a dependency change. It’s useful for cleaning up subscriptions, event listeners, or timers.

```js
useEffect(() => {
  const timer = setTimeout(() => {
    console.log("Timer triggered");
  }, 1000);

  // Cleanup function
  return () => {
    clearTimeout(timer); // Cleans up when the component unmounts or when dependencies change
  };
}, [someDependency]);
```

No cleanup needed if the effect does not require removing or undoing anything when the component unmounts or dependencies change.

4. Asynchronous Logic
   Avoid directly using async in useEffect: You cannot mark the useEffect function itself as async because it expects a cleanup function or nothing in return, and async functions return a promise. Instead, define an inner async function and call it inside useEffect.

```js
useEffect(() => {
  const fetchData = async () => {
    const result = await axios.get("/api/data");
    setData(result.data);
  };

  fetchData();
}, []);
```

5. Skipping unnecessary effects
   Avoid placing unnecessary values in the dependency array. For example, placing functions in the array can cause the effect to run every time a new function is created, even if its behavior is unchanged. You can use the useCallback hook to memoize functions if needed.

```js
const handleClick = useCallback(() => {
  // Function logic
}, []);

useEffect(() => {
  // This effect won't run unnecessarily
}, [handleClick]);
```

6. Common Use Cases

Data fetching: Fetch data from APIs after the component mounts.
Event listeners: Attach global event listeners (e.g., window resizing, scrolling) and clean them up on unmount.
Subscriptions: Subscribe to services like WebSockets and clean up when the component unmounts.
Timers: Set up and clear intervals or timeouts when appropriate.

7. Multiple useEffect Hooks

You can use multiple useEffect hooks in a single component if you have different side effects to manage. Each hook runs independently, so one side effect will not affect the other.

```js
useEffect(() => {
  // Effect 1
}, [dependency1]);

useEffect(() => {
  // Effect 2
}, [dependency2]);
```

8. Handling Conditional Logic in useEffect

If you need to conditionally trigger effects, you can place conditional logic inside the useEffect hook.

```js
useEffect(() => {
  if (shouldFetch) {
    // Only fetch data if 'shouldFetch' is true
    fetchData();
  }
}, [shouldFetch]);
```

9. Avoid Infinite Loops

Be cautious when updating state inside useEffect without proper dependencies. If state updates without the dependency array or has incorrect dependencies, it can cause the effect to run endlessly, leading to infinite loops.
Example of an infinite loop:

```js
useEffect(() => {
  setState(count + 1); // Infinite loop if 'count' is not in the dependency array
});
```

10. React Strict Mode in Development

React's Strict Mode intentionally runs effects twice in development to help identify side effects that may cause issues when the component re-renders (e.g., race conditions, unintended behavior). This only occurs in development and will not happen in production.

### Quick Summary:

- Use dependency arrays: Control when the effect runs.
- Avoid async directly in useEffect: Use an inner async function.
- Use cleanup functions: To prevent memory leaks from subscriptions, listeners, or timers.
- Avoid infinite loops: Be careful when updating state in useEffect without proper dependencies.
- Strict Mode runs effects twice in development to help identify potential issues.

#### Notes

1. useEffect hook is used for handling things outside the scope of React, like manually manipulating the DOM , make an API call, access to localStorage, etc.
2. useEffect hook is also used to keep different states in sync.
3. importance of the cleanUp funciton when using useEffect hook, to avoid memory leak on components that are not unmounted by React.
