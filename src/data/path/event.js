/**
 * @Description : Get event data from backend
 * @Author      : manho <manho30@outlook.my>
 * @Date        : 17/12/2022 16:14
 * @File        : event.js
 * @IDE         : WebStorm
 */

// import _request from "../helper/request";

/**
 * @Description : Get event data from backend
 * @param params
 * @returns {Promise<axios.AxiosResponse<>>|*}
 */
export function getEventList (params=null) {
    /** for debug only! */
    console.log('Fetch URL is working with: ', params);
    return [
        {
            'date': '2021-12-02',
            'time': '17:00',
            'title': 'test! ',
            'description': 'test!',
        }
    ]//_request('/event', 'get', params);
}