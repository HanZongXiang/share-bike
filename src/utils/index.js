import * as fetch from 'axios'

export function formatDate(unix) {
    function fixedZero(num) {
        return num >= 10 ? num : '0' + num
    }

    let date = new Date(unix)

    let year = date.getFullYear()
    let month = fixedZero(date.getMonth() + 1)
    let day = fixedZero(date.getDate())
    let hour = fixedZero(date.getHours())
    let minute = fixedZero(date.getMinutes())
    let second = fixedZero(date.getSeconds())
    let timeStr = ''
    return timeStr = `${year}-${month}-${day} ${hour}:${minute}:${second}`
}

// const xhr = fetch.create({
//     baseURL:'',
//     timeout:15000
// })

// export const axios = {
//     get(url,data,config) {
//
//     }
// }