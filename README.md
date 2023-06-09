## Тестовое задание серверная часть

#### Чтобы запустить проект, выполните следующие шаги:

1. Установите Docker на свой компьютер, если еще не установлен.
2. Склонируйте репозиторий
   ```
   git clone https://github.com/basya01/dZENcode_test_server.git
   ```
3. Откройте терминал или командную строку и перейдите в корневую директорию вашего проекта.
4. Соберите Docker-образ, используя команду:
   ```
   docker build -t <name-of-image> .
   ```
5. Дождитесь завершения сборки образа.
6. Запустите Docker-контейнер на порту 3000 помощью команды:
   ```
   docker run -p 3000:3000 <name-of-image>
   ```
7. Сервер доступен по адресу http://localhost:3000.

Чтобы запустить приложение без использования докера просто используйте эти команды после клонирования репозитория:

```
npm install
```

```
npm run dev
```
#### Диаграмма связей:

![Eer-диаграмма](./eer-diagram.png)
