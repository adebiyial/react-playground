import React from 'react';
import LoaderStyle from '../styles/LoaderStyle';

function AppLoader() {
  return (
    <LoaderStyle data-sc-for='Loader'>
      <div id='appLoader' className='loader'>
        <div className='spinner '>
          <div className='right-side'>
            <div className='bar'></div>
          </div>
          <div className='left-side'>
            <div className='bar'></div>
          </div>
        </div>
        <div className='loaderMessageBlock'>
          <p className='loaderMessage'>Loading the app for first time use.</p>
        </div>
      </div>
    </LoaderStyle>
  );
}

export default AppLoader;
