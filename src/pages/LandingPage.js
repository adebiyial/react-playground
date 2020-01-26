import React from 'react';
import { NavLink } from 'react-router-dom';
import LandingPageStyle from '../styles/LandingPageStyle';

function LandingPage() {
  return (
    <LandingPageStyle data-sc-for='LandingPage'>
      <div className='container'>
        <header className='globalHeader'>
          <nav className='globalNav'>
            <div className='logoBlock globalNavStart'>
              <div className='logoIcon'></div>
              <h1 className='logoTitle'>react playground</h1>
            </div>
            <div className=' globalNavLinksBlock globalNavEnd'>
              <NavLink className='about' to='/about'>
                about
              </NavLink>
              <NavLink className='dashboard' to='/dashboard'>
                dashboard
              </NavLink>
            </div>
          </nav>
        </header>
        <section className='globalLanding'>
          <div className='globalLandingStart'>
            <h1 className='title'>Idle hands build nothing that you can call you own</h1>
            <p className='subTitle'>
              I experiment with these things every now and then. These are things I usually need in an app I'm building,
              and since I'm not building a <em>framework</em>, design changes, it'd be nice to have a common denominator
              that I can just plug in to the apps I'm bulding. These things are usually components like modals, forms,
              you name it.
            </p>
          </div>
          <div className='globalLandingEnd'>
            <div className='animatedBlock'></div>
          </div>
        </section>
      </div>
    </LandingPageStyle>
  );
}

export default LandingPage;
