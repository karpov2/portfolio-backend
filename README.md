# Сервер portfolio (диплом)
Сервис поиска новостей

# Демо
К api можно обратиться по адресу `api.karpov-portfolio.tk`, к статике по адресу `karpov-portfolio.tk` или по ip `84.201.189.46`

## В работе использовались:
Node js, MongoDB, Mongoose, Express

## Функционал сервера
1. Регистрация пользователя `POST localhost:3000/signup`
2. Авторизация пользователя `POST localhost:3000/signin`
3. Создание новой статьи `POST localhost:3000/articles`
4. Удаление статьи `DELETE localhost:3000/articles/articleId`
5. Возвращает все сохранённые пользователем статьи `GET localhost:3000/articles`
6. Возвращает информацию о пользователе `GET localhost:3000/users/me`

## Установка проекта

Скопируйте проект на компьютер:

```
git clone git@github.com:karpov2/portfolio-backend.git
```

Установите зависимости проекта:

```
npm i
```

## Работа с сервером Node (express)

Перед началом работы необходимо проверить наличие установленного Node.js и npm

```
npm -v или node -v
```

Запускаем сервер в режиме разработки

```
npm run dev
```

## Версионность проекта

Доступные версии смотрите в [тегах этого репозитория](https://github.com/karpov2/Mesto/tags).
