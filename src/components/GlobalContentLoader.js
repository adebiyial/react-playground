import React from 'react';

function GlobalContentLoader() {
  return (
    <div id='globalContentLoaderBlock'>
      <div className='spinner '>
        <div className='right-side'>
          <div className='bar'></div>
        </div>
        <div className='left-side'>
          <div className='bar'></div>
        </div>
      </div>
      <p className='loaderMessage'>Remember to get up and take a nap.</p>
    </div>
  );
}

export default GlobalContentLoader;
