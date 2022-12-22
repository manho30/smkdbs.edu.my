/**
 * @Description : Parse data from backend
 * @Author      : manho <manho30@outlook.my>
 * @Date        : 20/12/2022 17:06
 * @File        : parse.js
 * @IDE         : WebStorm
 */

/**
 * @Description : Return result from Object
 * @returns {Array}
 * @param data
 * @private
 */
function _parseList (data){
    data.then((res) => {
        return res.result
    })
}

export default _parseList;





