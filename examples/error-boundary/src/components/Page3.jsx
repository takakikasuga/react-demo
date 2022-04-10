import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './ErrorFallback';

function onError(error, info) {
  console.log('error.message', error.message);
  console.log('info.componentStack:', info.componentStack);
}

function ThrowError() {
  throw new Error('Page3Child Throw Error');
}

function Page3Child() {
  const [throwError, setThrowError] = React.useState(false);

  const onClick = () => {
    setThrowError((preThrowError) => !preThrowError);
  };

  const onReset = () => {
    setThrowError((pre) => !pre);
  };

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={onError}
      onReset={onReset}
      resetKeys={[throwError]}>
      <div style={{ backgroundColor: '#DEB331' }}>
        <h5>Page4</h5>
        <button type='button' onClick={onClick}>
          Throw Error
        </button>
        {throwError && <ThrowError />}
      </div>
    </ErrorBoundary>
  );
}
export default Page3Child;
