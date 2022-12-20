/**
 * @Description : Parse data from backend
 * @Author      : manho <manho30@outlook.my>
 * @Date        : 20/12/2022 17:06
 * @File        : parse.js
 * @IDE         : WebStorm
 */

/**
 * @Description : Return result from Object
 * @param {Object}
 * @returns {Array}
 * @public
 */
function parseList (data){
    return data.result ? data.result : [];
}

export {
    parseList,
}





