import {dateHandler} from './getDateDiff.js'
import {toggleForm} from './toggleForm.js';
import {dropTimerBtn, formDate, formTimer, startTimerBtn, toggleButton} from "./selectors.js";
import {dropTimerHandler, setTimerValue, timerHandler} from "./timer.js";

formTimer.hidden = true;
startTimerBtn.disabled = true;

toggleButton.addEventListener('click', toggleForm(toggleButton, formDate, formTimer));

formDate.addEventListener('submit', dateHandler);

formTimer.addEventListener('input', setTimerValue);

formTimer.addEventListener('submit', timerHandler);

dropTimerBtn.addEventListener('click', dropTimerHandler);