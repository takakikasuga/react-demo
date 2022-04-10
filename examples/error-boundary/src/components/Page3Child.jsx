import React, { useEffect } from 'react';

function Page3Child() {
  useEffect(() => {
    throw new Error('Page3Child Throw Error');
  }, []);
  return (
    <div style={{ backgroundColor: '#DEB331' }}>
      <h5>Page3Child</h5>
    </div>
  );
}
export default Page3Child;
