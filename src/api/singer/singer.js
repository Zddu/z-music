import request from '@/utils/request'

export function listSingers(url, params) {
    return request({
        url:url,
        method:"get",
        params
    })
}
