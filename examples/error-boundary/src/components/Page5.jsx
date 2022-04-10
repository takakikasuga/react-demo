import { useState } from 'react';
import { useErrorHandler } from 'react-error-boundary';

const fetchUserAPI = async () => {
  const username = 'piyoko';
  const ss = new Date().getMilliseconds();
  if (ss % 2 === 0) {
    throw Error('Error in fetchUserAPI'); // エラーを発生させる
  }
  return username;
};

function Page5() {
  const [userName, setUserName] = useState('');
  const handleError = useErrorHandler();

  const onClick = () => {
    fetchUserAPI()
      .then((res) => {
        setUserName(res);
      })
      .catch((err) => {
        handleError(err);
      });
  };

  return (
    <div style={{ backgroundColor: '#8CCDB0' }}>
      <h3>Page3</h3>
      <button type='button' onClick={onClick}>
        Button
      </button>
      <p>ユーザー名：{userName}</p>
    </div>
  );
}
export default Page5;
