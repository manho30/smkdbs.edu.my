/**
 * @Description : Get event data from backend
 * @Author      : manho <manho30@outlook.my>
 * @Date        : 17/12/2022 16:14
 * @File        : event.js
 * @IDE         : WebStorm
 */

import _request from "../helper/request";
import {domain} from "./domain.global";

/**
 * @Description : Get event data from backend
 * @returns {Promise<axios.AxiosResponse<>>|*}
 */
function getEventList () {
    return _request(`${domain.domain}/api/event`, 'GET');
}

/**
 * @Description : Get announcement data from backend
 * @returns {Promise<axios.AxiosResponse<>>|*}
 */
function getAnnouncementList () {
    return _request(`${domain.domain}/api/announcement`, 'GET');
}

export {
    getEventList,
    getAnnouncementList,
}