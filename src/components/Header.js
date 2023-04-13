import React from 'react';

export default function Header({title}) {
  return (
    <header className='header'>
      <h2 className='header__title margin-null'>{title}</h2>
    </header>
  );
}