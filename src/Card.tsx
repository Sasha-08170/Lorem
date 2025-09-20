// App.tsx
import React from 'react';
import clsx from 'clsx';
import useSWR from 'swr';
import Cards from './CardGrid';
import './index.css';

// Типизация карточки
interface CardItem {
  id: number;
  title: string;
  text: string;
  link: string;
}

// fetcher для SWR
const fetcher = (url: string) => fetch(url).then((res) => res.json());

const App: React.FC = () => {
  // Загружаем данные из JSON как тестовое API
  const { data, error, isLoading } = useSWR<CardItem[]>('./Сards.json', fetcher);

  if (isLoading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка загрузки...</p>;

  return (
    <div className={clsx('cards')}>
      {data?.map((card) => (
        <Cards key={card.id} title={card.title} text={card.text} link={card.link} />
      ))}
    </div>
  );
};

export default App;
