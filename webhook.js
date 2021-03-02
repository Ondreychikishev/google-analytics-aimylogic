/**
 * Once your bot steps into the screen with webhook action enabled, it requests your webhook URL with a full set of currently available variables.
 * Here you can add handlers for such actions to calculate any data for your bot.
 * Every handler is a simple function that accepts an object with variables from your bot and can modify it.
 * Once the handler has modified or added some variables, the bot receives them and continues to execute blocks in scenario.
 * Please read more here https://github.com/aimylogic/nodejs-webhook
 */

'use strict';
const request = require('sync-request');

module.exports = (webhook) => {
    webhook
    .on('tariff', (session) => { //название события
        /**
        https://developers.google.com/analytics/devguides/collection/protocol/v1?hl=ru
        tid:'UA-145269857-5', -  уникальный идентификатор отслеживания
        cid: session.userId, -  уникальный id пользователя, используем нашу системную переменную $userId
        t: 'event', - тип обращения. Возможные варианты: pageview, screenview, event, transaction, item, social, exception, timing
        ec: 'bot', - категория события, называете вы, может быть любой на ваше усмотрение
        ea: 'tariff' - действие события, называете также вы
        */
        request('POST', 'https://www.google-analytics.com/collect?v=1&tid=UA-*********-*&cid=12345678&t=event&ec=bot&ea=tariff');
    });
};
