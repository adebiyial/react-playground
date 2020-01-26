import React, { useState, useEffect } from 'react';
import Routes from './routes';
import AppLoader from './components/AppLoader';

function App() {
  const [appIsLoading, setAppIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAppIsLoading(false);
    }, 5000);
  }, [appIsLoading]);

  if (appIsLoading) {
    return <AppLoader />;
  }
  return (
    <div className='App'>
      <Routes />
    </div>
  );
}

export default App;
