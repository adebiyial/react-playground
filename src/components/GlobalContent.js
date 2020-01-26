import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import GlobalContentLoader from './GlobalContentLoader';

function GlobalContent() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, [isLoading]);

  if (isLoading) {
    return <GlobalContentLoader />;
  }

  // -> What content to render
  return (
    <section id='GlobalContent'>
      <Switch>
        <Route path='/dashboard' exact>
          <h1>Dashboard...</h1>
        </Route>
        <Route path='/dashboard/modal'>
          <h1>modal</h1>
        </Route>
        <Route path='/dashboard/loader'>
          <h1>loader</h1>
        </Route>
        <Route path='/dashboard/toast_notification'>
          <h1> toast_notification</h1>
        </Route>
      </Switch>
    </section>
  );
}

export default GlobalContent;
