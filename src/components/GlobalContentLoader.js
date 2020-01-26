import React from 'react';
import LoaderStyle from '../styles/LoaderStyle';

function GlobalContentLoader() {
  return (
    <LoaderStyle data-sc-for='Loader'>
      <div id='globalContentLoaderBlock' className='loader'>
        <div className='spinner '>
          <div className='right-side'>
            <div className='bar'></div>
          </div>
          <div className='left-side'>
            <div className='bar'></div>
          </div>
        </div>
        <div className='loaderMessageBlock'>
          <p className='loaderMessage'>Remember to get up and take a nap.</p>
        </div>
      </div>
    </LoaderStyle>
  );
}

export default GlobalContentLoader;
