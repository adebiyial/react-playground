import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function GlobalSideNav() {
  const [topics, setTopics] = useState([{ name: 'modal' }, { name: 'loader' }, { name: 'toast notification' }]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, [isLoading]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <section id='GlobalSideNav'>
      <div className='title'>topics</div>
      <section className='topicsBlock'>
        {topics.map(topic => (
          <NavLink className='topic' to='/dashboard' key={topic.name}>
            <div className='topicIcon'></div>
            <p className='topicTitle'>{topic.name}</p>
          </NavLink>
        ))}
      </section>
    </section>
  );
}

export default GlobalSideNav;
