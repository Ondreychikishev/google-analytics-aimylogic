# google-analytics-aimylogic
example integrations google-analytics

Нажмите на кнопку ниже, чтобы запустить свою копию этого приложения

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://dashboard.heroku.com/new?template=https://github.com/Ondreychikishev/google-analytics-aimylogic.git)

## Как запустить на Heroku

Установите [git](https://git-scm.com/book/ru/v2/%D0%92%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5-%D0%A3%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0-Git) и [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli). Запустите терминал (или консоль) на своем компьютере и введите:
```
heroku login
heroku git:clone -a <your Heroku application name>
cd <your Heroku application name>
git remote add origin https://github.com/Ondreychikishev/send-message
git pull origin master
```
  
Когда вы будете готовы выложить свои изменения в Heroku, введите:
```
git add .
git commit -am "some comments"
git push
```
## Что необходимо настроить

Укажите название событий в файле webhook.js(названия должны быть такие же как название экранов в Aimylogic)
```
webhook
    .on('tariff', (session) => { //tariff - это название вашего события
        
    });
```
Укажите необходимые идентификаторы
```
webhook
    .on('tariff', (session) => { //название события
        request('POST', 'https://www.google-analytics.com/collect?v=1', {
            form: {
                tid:'UA-145269857-5', // уникальный идентификатор отслеживания
                cid: session.userId, // уникальный id пользователя, используем системную переменную из Aimylogic $userId
                t: 'event', // тип обращения. Возможные варианты: pageview, screenview, event, transaction, item, social, exception, timing
                ec: 'bot', // категория события, называете вы, может быть любой на ваше усмотрение
                ea: 'tariff' // действие события, называете также вы
            }
        });
    });
```