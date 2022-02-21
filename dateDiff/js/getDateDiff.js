import {DateTime} from 'luxon'
import {printError, printResult} from "./printResult.js";

/**
 * Обрабатывает вызов расчёта дат
 * @param {Object} event
 */
export const dateHandler = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const startDate = formData.get('startDate');
    const endDate = formData.get('endDate');

    if (!startDate || !endDate) {
        printError('Oooooopppsss - введите текст!!!!');
    } else {

        //Обрабатывает разницу дат
        const dateDiff = getDateDiff(startDate, endDate);

        // Выводит результат с разницей дат или сообщение об ошибке
        printResult(dateDiff);
    }
}

/**
 * Обрабатывает разницу дат
 * @param {string} dateFrom
 * @param {string} dateTo
 * @returns {*}
 */

const getDateDiff = (dateFrom, dateTo) => {
    if (dateFrom < dateTo) {
        [dateFrom, dateTo] = [dateTo, dateFrom];
    }

    const dateFromObject = DateTime.fromISO(dateFrom);
    const dateToObject = DateTime.fromISO(dateTo);

    return dateFromObject.diff(dateToObject, ['years', 'months', 'days']).toObject();
}