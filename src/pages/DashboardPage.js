import React from 'react';
import DashboardPageStyle from '../styles/DashboardPageStyle';
import GlobalContent from '../components/GlobalContent';
import GlobalSideNav from '../components/GlobalSideNav';
import GlobalTopNav from '../components/GlobalTopNav';

function DashboardPage() {
  return (
    <DashboardPageStyle data-sc-for='DashboardPage'>
      <GlobalSideNav />
      <div className='globalContent'>
        <GlobalTopNav />
        <GlobalContent />
        <div className='overlay'></div>
      </div>
    </DashboardPageStyle>
  );
}

export default DashboardPage;
