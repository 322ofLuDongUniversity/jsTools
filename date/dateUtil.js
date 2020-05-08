let DateUtil = {};
(function (DateUtil) {
    // 时间格式化
    function dateFormat(date, fmt) {
        if (fmt === void 0) { fmt = "yyyy/MM/dd hh:mm:ss S"; }
        const o = {
            "M+": date.getMonth() + 1,
            "d+": date.getDate(),
            "h+": date.getHours(),
            "m+": date.getMinutes(),
            "s+": date.getSeconds(),
            "q+": Math.floor((date.getMonth() + 3) / 3),
            "S": date.getMilliseconds()
        };
        if (/(y+)/.test(fmt))
            fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (const k in o) {
            if (new RegExp("(" + k + ")").test(fmt))
                fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
        }
        return fmt;
    }
    DateUtil.dateFormat = dateFormat;
})(DateUtil || (DateUtil = {}));

export {
    DateUtil
}
