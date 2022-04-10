import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './components/ErrorFallback';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page4 from './components/Page4';
import Page5 from './components/Page5';

const onError = (error, info) => {
  // ここでログ出力などを行う
  console.log('error.message', error.message);
  console.log('info.componentStack:', info.componentStack);
};

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onError={onError}>
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
    </ErrorBoundary>
  );
}
export default App;
