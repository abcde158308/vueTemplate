var root
if (process.env.NODE_ENV === 'development') {
    root = '/api'
} else {
    //  var root = process.env.API_ROOT
    root = '/api'
}
export default {
    insurance: root + '/a/a' // 展示接口(GET)
}
