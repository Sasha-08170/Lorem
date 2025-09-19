import React from 'react';
import styles from './Cards.module.css';

export interface CardProps {
  id?: number; // уникальный идентификатор (опционально, для тестов или отладки)
  title: string; // Заголовок карточки
  text: string; //  Текст карточки
  link: string; // Ссылка для перехода
  color?: string; // Цвет декорации (по умолчанию зелёный)
  className?: string; // Доп. класс для стилизации
  onClick?: (id?: number) => void; // Обработчик клика
}

const Card: React.FC<CardProps> = ({ id, title, text, link, onClick }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      e.preventDefault();
      onClick(id);
    }
  };

  return (
    <div className={styles.card}>
      <a href={link} className={styles.card__link} onClick={handleClick}>
        <div className={styles.card__decoration} />
        <h3 className={styles.card__title}>{title}</h3>
        <p className={styles.card__text}>{text}</p>
      </a>
    </div>
  );
};

export default Card;
