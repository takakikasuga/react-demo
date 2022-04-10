import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './components/ErrorFallback';

const onError = (error, info) => {
  // ここでログ出力などを行う
  console.log('error.message', error.message);
  console.log('info.componentStack:', info.componentStack);
};

function App() {
  return (
    <>
      <Page1 />
      <Page2 />
      <ErrorBoundary FallbackComponent={ErrorFallback} onError={onError}>
        <Page3 />
      </ErrorBoundary>
    </>
  );
}
export default App;
