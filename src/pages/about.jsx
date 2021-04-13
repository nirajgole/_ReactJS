import React from 'react';
import { FaGithub } from 'react-icons/fa';
const About = () => {
  return (
    <div className='container'>
      <h1 className='py-4'>
        <a
          href='https://github.com/nirajgole/REACT-CRUD-APP'
          style={{ fontFamily: 'Snell Roundhand, cursive', color: '#000' }}
        >
          <FaGithub />
          <span>source code</span>
        </a>
      </h1>
    </div>
  );
};

export default About;
