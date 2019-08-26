export const dateFormatter = (nows) => {
    if (!nows) return ''
    const now = new Date(nows)
    const year = now.getFullYear()
   
    const month = now.getMonth() + 1
    month = checkAddZone(month)
   
    const date = now.getDate()
    date = checkAddZone(date)
    return year + '-' + month + '-' + date
  }
   
  function checkAddZone (num) {
    return num<10 ? '0' + num.toString() : num
  }
   
  export function dateTimeFormatter (t) {
    if (!t) return ''
    t = new Date(t).getTime()
    t = new Date(t)
    const year = t.getFullYear()
    const month = (t.getMonth() + 1)
    month = checkAddZone(month)
   
    const date = t.getDate()
    date = checkAddZone(date)
   
    const hour = t.getHours()
    hour = checkAddZone(hour)
   
    const min = t.getMinutes()
    min = checkAddZone(min)
   
    const se = t.getSeconds()
    se = checkAddZone(se)
   
    return year + '-' + month + '-' + date + ' ' + hour + ':' + min + ':' + se
  }