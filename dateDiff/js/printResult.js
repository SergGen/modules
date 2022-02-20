import {result} from "./selectors.js";
/**
 * Выводит сообщение об ошибке
 * @param {string} errText
 */
export const printError = (errText) => {
    result.innerText = errText;
}

/**
 * Выводит результат с разницей дат
 * @param {string} years
 * @param {string} months
 * @param {string} days
 */
export const printResult = ({ years, months, days }) => {
    result.innerText = `Год: ${years} - Месяц: ${months} - День: ${days}`;
}