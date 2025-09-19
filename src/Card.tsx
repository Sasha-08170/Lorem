import React from 'react';
import clsx from 'clsx';
import Cards from './CardGrid';
import Card from './Сards.json';
import './index.css';

interface CardItem {
  id: number;
  title: string;
  text: string;
  link: string;
}

const App: React.FC = () => {
  return (
    <>
      <div className={clsx('cards')}>
        {(Card as CardItem[]).map((card) => (
          <Cards key={card.id} title={card.title} text={card.text} link={card.link} />
        ))}
      </div>
    </>
  );
};

export default App;
