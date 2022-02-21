/**
 * Переключение форм дат и таймера
 * @param {Object} toggleButton
 * @param {Object} formDate
 * @param {Object} formTimer
 * @returns {(function(): void)|*}
 */
export const toggleForm = (toggleButton, formDate, formTimer) => () => {
    formDate.hidden = !formDate.hidden;
    formTimer.hidden = !formTimer.hidden;
    if(formTimer.hidden){
        toggleButton.innerText = 'Set timer';
    } else {
        toggleButton.innerText = 'Set date';
    }
}