import React from 'react';
import DashboardPageStyle from '../styles/DashboardPageStyle';
import GlobalContent from './GlobalContent';
import GlobalSideNav from './GlobalSideNav';

function DashboardPage() {
  return (
    <DashboardPageStyle data-sc-for='DashboardPage'>
      <GlobalSideNav />
      <GlobalContent />
    </DashboardPageStyle>
  );
}

export default DashboardPage;
