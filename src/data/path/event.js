/**
 * @Description : Get event data from backend
 * @Author      : manho <manho30@outlook.my>
 * @Date        : 17/12/2022 16:14
 * @File        : event.js
 * @IDE         : WebStorm
 */

import { get } from '@/utils/request'

export function getEventList (params) {
    return get('/event', params)
}