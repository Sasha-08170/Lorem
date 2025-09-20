# 📌 Lorem

Анимированные карточки на **React + TypeScript** с поддержкой адаптивности и кастомных обработчиков кликов.  

<img width="1916" height="857" alt="Screenshot_2025_09_20-1" src="https://github.com/user-attachments/assets/6f98307c-9357-4d49-8bce-d3c244f0fa07" />

---

## 📂 Структура проекта

- **Card.tsx** – компонент одной карточки.  
- **CardGrid.tsx** – контейнер для отображения набора карточек.  
- **App.tsx** – главный компонент, рендерит список карточек из JSON.  
- **Cards.json** – данные карточек (`id`, `title`, `text`, `link`).  
- **Cards.module.css** – стили для карточек.  
- **index.css** – глобальные стили.  

---

## ⚙️ Установка и запуск

```bash
# Клонировать репозиторий
git clone https://github.com/username/react-cards.git

# Перейти в папку проекта
cd react-cards

# Установить зависимости
npm install

# Запустить dev-сервер
npm start
