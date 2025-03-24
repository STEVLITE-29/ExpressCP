const path = require('path');

const workingHoursMiddleWare = (req, res, next) => {
    const date = new Date()
    const hour = date.getHours()
    const day = date.getDay()
    
    const workingHour = hour >= 9 && hour < 17
    const workingDay = day >= 1 && day <= 5

    if (workingHour && workingDay) {
        next()
    } else {
        res.sendFile(path.join(__dirname, "../views/unavailable.html"))
    }
}

module.exports = workingHoursMiddleWare;