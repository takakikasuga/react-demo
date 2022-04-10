import { useEffect, useState } from 'react';

import { ErrorBoundary, useErrorHandler } from 'react-error-boundary';

const ErrorFallback = ({ error, resetErrorBoundary }) => (
  <div>
    <p>Something went wrong</p>
    <button onClick={resetErrorBoundary}>Try again</button>
  </div>
);

const Counter = ({ count }) => {
  useErrorHandler(null);
  console.log('Counter');
  useEffect(() => {
    if (count === 3) {
      throw Error('Crash');
    }
  });

  return <p>{count}</p>;
};
const CounterApp = () => {
  const [count, setCount] = useState(0);

  function onClick() {
    setCount((count) => count + 1);
  }

  function throwError() {
    setCount(3); // count = 3 will cause error
  }

  function handleReset() {
    setCount(0);
  }

  /**
   * @target resetKeys
   * @document https://dev.to/dinhhuyams/react-error-boundary-surviving-through-pandemic-2pl9
   */
  return (
    <div>
      <button onClick={onClick}>click</button>
      <button onClick={throwError}>throw error</button>
      <ErrorBoundary
        resetKeys={[count]}
        onResetKeysChange={() => {
          console.log('onResetKeysChange');
        }}
        FallbackComponent={ErrorFallback}
        onRest={handleReset}>
        <Counter count={count} />
      </ErrorBoundary>
    </div>
  );
};

export default CounterApp;
