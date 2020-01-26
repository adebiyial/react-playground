import React, { useEffect, useState } from 'react';
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

  return (
    <section id='GlobalContent'>
      <div id='content'>GlobalContent</div>
    </section>
  );
}

export default GlobalContent;
