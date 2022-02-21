import {Duration} from 'luxon'
import {formTimer, inputTime, startTimerBtn, timerValueLink} from "./selectors.js";
import {sfx} from "./soundConfig.js";

let startTimerValue = null;
let currentTimerValue = null;
let interval = null;

/**
 * Обрабатывает установку времени таймера
 */
export const setTimerValue = () => {
    const formData = new FormData(formTimer);
    startTimerValue = formData.get('timerValue');
    timerValueLink.innerText = startTimerValue;
    startTimerBtn.disabled = false;
}

/**
 * Обрабатывает событие запуска таймера
 * @param {Object} event
 */
export const timerHandler = (event) => {
    event.preventDefault();
    let dur;
    if(!currentTimerValue) {
        dur = Duration.fromISOTime(startTimerValue);
        currentTimerValue = dur.as('seconds');
    }
    if (!startTimerValue) {
        timerValueLink.innerText = 'Oooooopppsss - Установите время!!!!';
    } else {
        if(interval) {
            clearInterval(interval);
            startTimerBtn.innerText = 'Start timer';
            interval = null;
        } else {
            inputTime.disabled = true;
            startTimerBtn.innerText = 'Stop timer';
            interval = setInterval(()=>{
                if(currentTimerValue <= 0) {
                    dropTimer();
                    sfx.boost.play();
                    timerValueLink.innerText = 'DING DONG!!!';
                } else {
                    currentTimerValue--;
                    dur = Duration.fromObject({seconds: currentTimerValue});
                    timerValueLink.innerText = dur.toISOTime({ suppressMilliseconds: true });
                }
            }, 1000);
        }
    }
}

/**
 *  Обрабатывает событие сброса таймера
 * @param {Object} event
 */
export const dropTimerHandler = (event) => {
    event.preventDefault();
    dropTimer();
}

/**
 * Функция сброса таймера
 */
const dropTimer = () => {
    if(interval) {
        clearInterval(interval);
        interval = null;
    }
    startTimerValue = null;
    currentTimerValue = null;
    inputTime.disabled = false;
    inputTime.value = '';
    startTimerBtn.innerText = 'Start timer';
    startTimerBtn.disabled = true;
    timerValueLink.innerText = '';
}