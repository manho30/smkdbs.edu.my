/**
 * @Description : Request data from backend
 * @Author      : manho <manho30@outlook.my>
 * @Date        : 17/12/2022 16:15
 * @File        : request.js
 * @IDE         : WebStorm
 */

import axios from "axios";

/**
 * @Description : Request data from backend
 * @param url
 * @returns {Promise<AxiosResponse<>>}
 * @private
 */
export default function _request(url) {
    return axios.get(url)
}