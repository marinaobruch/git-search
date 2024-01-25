# GitHub Search Users

## Project Description / Описание проекта

Приложение по поиску пользователей ресурса GitHub. Возможности данного приложения:

- Поиск пользователей по их логину/имени,
- Просмотр результатов (реализован функционал пагинации страниц),
- Просмотр подробностей о выбранном пользователе,
- Сортировка списка по количеству репозиториев (возрастанию/убыванию),
- Возможность использовать приложение с разных устройств

Проект:

- выполнен в минималистичном стиле с применением анимаций,
- обрабатывает ошибки от сервера,
- использует лоадеры при загрузке данных,
- учитывает размеры экранов до 350px (реализована адаптивная верстка),

Application for searching users of the GitHub resource. Features of this application:

- Search for users by their login/name,
- View results (implemented page pagination functionality),
- View details about the selected user,
- Sorting the list by the quantity of repositories (ascending/descending),
- Ability to use the application from different devices

Project:

- create in a minimalist style using animations,
- handles errors from the server,
- uses loaders when loading data,
- takes into account screen sizes up to 350px (adaptive implemented),

---

## Stack / Стек технологий

### The following technologies were used to develop this project / Технологии, используемые при разработке проекта:

- TypeScript
- React (React Hooks)
- Styled Components
- Axios
- Postman (form checking requests)

### Libraries / Библиотеки

- framer-motion
- react-icons
- react-loader-spinner
- gh-pages
- lodash-es
- use-latest

---

## Bundler / Сборщик: Vite

---

## How to start a project / Как запустить проект

Данные по пользователям доступны по url:https://api.github.com/search/users?q={имя пользователя} (документация: https://developer.github.com/v3/search/#search-users).

User data is available at url: https://api.github.com/search/users?q={user name} (documentation: https://developer.github.com/v3/search/#search-users).

### Локальный запуск проекта

Для клонирования репозитория выполните команду:

```
git clone https://github.com/marinaobruch/git-search.git
```

Перед разработкой необходимо проинсталировать пакет проекта.

```
cd git-search
npm i
```

Запуск локального сервера с проектом.

```
npm run dev
```

Проект будет запущен по адресу: http://localhost:3000

### Local start project

To clone the repository, run the command:

```
git clone https://github.com/marinaobruch/git-search.git
```

Before development, you must install the project package.

```
cd git-search
npm i
```

Running a local server with a project.

```
npm run dev
```

The project will be launched at: http://localhost:3000
