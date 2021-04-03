import request from '@/utils/request'

export function list(url, params) {
    return request({
        url:url,
        method:"get",
        params
    })
}

export function bannerList(url, params) {
    return request({
        url:url,
        method:"get",
        params
    })
}
export function playlist(url, params) {
    return request({
        url:url,
        method:"get",
        params
    })
}
