
_Hooks_ are a new addition in React 16.8. They let you use state and other React features without writing a class.

```javascript
import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

## Hooks

-   **Completely opt-in.** You can try Hooks in a few components without rewriting any existing code. But you don’t have to learn or use Hooks right now if you don’t want to.
-   **100% backwards-compatible.** Hooks don’t contain any breaking changes.
-   **Available now.** Hooks are now available with the release of v16.8.0.

**There are no plans to remove classes from React.** You can read more about the gradual adoption strategy for Hooks in the [bottom section](https://legacy.reactjs.org/docs/hooks-intro.html#gradual-adoption-strategy) of this page.

**Hooks don’t replace your knowledge of React concepts.** Instead, Hooks provide a more direct API to the React concepts you already know: props, state, context, refs, and lifecycle. As we will show later, Hooks also offer a new powerful way to combine them.

**If you just want to start learning Hooks, feel free to [jump directly to the next page!](https://legacy.reactjs.org/docs/hooks-overview.html)** You can also keep reading this page to learn more about why we’re adding Hooks, and how we’re going to start using them without rewriting our applications.

[Website](https://legacy.reactjs.org/docs/hooks-intro.html)