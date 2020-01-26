import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function GlobalSideNav() {
  const [topics, setTopics] = useState([
    { name: 'modal', url: 'modal' },
    { name: 'loader', url: 'loader' },
    { name: 'toast notification', url: 'toast_notification' }
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
