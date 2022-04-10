import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './ErrorFallback';
import Page3Child from './Page3Child';

function Page3() {
  return (
    <div style={{ backgroundColor: '#DFD35F' }}>
      <h3>Page3</h3>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Page3Child />
      </ErrorBoundary>
    </div>
  );
}
export default Page3;
