import { useErrorHandler } from 'react-error-boundary';

function Page4() {
  const handleError = useErrorHandler();

  const onClick = () => {
    try {
      throw Error('Page4 throw error'); // エラーを発生させる
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <div style={{ backgroundColor: '#FF7272' }}>
      <h3>Page4</h3>
      <button type='button' onClick={onClick}>
        Button
      </button>
    </div>
  );
}
export default Page4;
