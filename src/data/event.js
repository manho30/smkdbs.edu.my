/**
 * @Description : Get event data from backend
 * @Author      : manho <manho30@outlook.my>
 * @Date        : 17/12/2022 16:14
 * @File        : event.js
 * @IDE         : WebStorm
 */

import _request from "./helper/request";
import {domain} from "./path/domain.global";
import _parseList from "./helper/parse";

/**
 * @Description : Get event data from backend
 * @returns {Promise<axios.AxiosResponse<>>|*}
 * @private
 */
function _getEventList () {
        return _request(`${domain.domain}/event`);
}

/**
 * @Description : Get announcement data from backend
 * @returns {Promise<axios.AxiosResponse<>>|*}
 * @private
 */
function _getAnnouncementList () {
    return _request(`${domain.domain}/announcement`, 'GET');
}


/**
 * @Description : Return event data from backend
 * @returns {Array}
 * @public
 */
function getEventList () {
    return _parseList(_getEventList());
}

/**
 * @Description : Return announcement data from backend
 * @returns {Array}
 * @public
 */
function getAnnouncementList () {
    return _parseList(_getAnnouncementList());
}

// for debug only!
// console.log(getEventList());
export {
    getEventList,
    getAnnouncementList,
}