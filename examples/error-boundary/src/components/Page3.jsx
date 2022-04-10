import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './ErrorFallback';

function onError(error, info) {
  console.log('error.message', error.message);
  console.log('info.componentStack:', info.componentStack);
}

function ThrowError() {
  if (new Date().getMilliseconds() % 2 === 0) {
    throw new Error('Page3Child Throw Error');
  }
  return <p>not throw error</p>;
}

function Page3Child() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onError={onError}>
      <div style={{ backgroundColor: '#DEB331' }}>
        <h5>Page3Child</h5>
        <ThrowError />
      </div>
    </ErrorBoundary>
  );
}
export default Page3Child;
