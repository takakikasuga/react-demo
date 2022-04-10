function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div>
      <h2>エラーが発生しました。</h2>
      <pre>{error.message}</pre>
      <button type='button' onClick={resetErrorBoundary}>
        もう一度、実行する
      </button>
    </div>
  );
}
export default ErrorFallback;
