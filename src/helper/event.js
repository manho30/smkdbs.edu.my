/**
 * @Description : event handler
 * @Author      : manho <manho30@outlook.my>
 * @Date        : 2/12/2022 17:23
 * @File        : event.js
 * @IDE         : WebStorm
 */

/**
 * @Description : Check if the event is passed
 * @param {string} event_date - event date dd/mm/yyyy
 * @param {string} event_time - event time hh:mm Default: 00:00
 * @return {boolean} - true if the event is passed
 */
const isEventPassed = (event_date, event_time='00:00') => {
    const event_datetime = new Date(`${event_date} ${event_time}`);
    const now = new Date();
    return event_datetime < now;
}


/** for debug only! */
// console.log(isEventPassed('2021-12-02', '17:00'));

module.exports = {
    isEventPassed
}