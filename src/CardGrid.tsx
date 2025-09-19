import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import styles from './Cards.module.css';

export interface CardProps {
  id?: number; // уникальный идентификатор (для key и onClick)
  title: string; // Заголовок карточки
  text: string; // Текст карточки
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
    <div className={clsx(styles.card)}>
      <Link to={link} className={clsx(styles.card__link)} onClick={handleClick}>
        <div className={clsx(styles.card__decoration)} />
        <h3 className={clsx(styles.card__title)}>{title}</h3>
        <p className={clsx(styles.card__text)}>{text}</p>
      </Link>
    </div>
  );
};

export default Card;
