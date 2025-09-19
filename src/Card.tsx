import React from 'react';
import clsx from 'clsx';
import CardGrid from './CardGrid';
import cards from './Сards.json'; // импорт JSON
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
        {(cards as CardItem[]).map((card) => (
          <CardGrid key={card.id} title={card.title} text={card.text} link={card.link} />
        ))}
      </div>
    </>
  );
};

export default App;
