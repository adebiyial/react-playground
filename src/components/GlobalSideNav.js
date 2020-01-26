import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function GlobalSideNav() {
  const [topics] = useState([
    { name: 'modal', url: '/dashboard/modal' },
    { name: 'loader', url: '/dashboard/loader' },
    { name: 'toast notification', url: '/dashboard/toast_notification' }
  ]);

  return (
    <section id='GlobalSideNav'>
      <div className='title'>topics</div>
      <section className='topicsBlock'>
        {topics.map(topic => (
          <NavLink className='topic' to={`${topic.url}`} key={topic.name}>
            <div className='topicIcon'></div>
            <p className='topicTitle'>{topic.name}</p>
          </NavLink>
        ))}
      </section>
    </section>
  );
}

export default GlobalSideNav;
