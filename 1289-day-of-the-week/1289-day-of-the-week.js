/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
var dayOfTheWeek = function(day, month, year) {
      let week = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ]
    const wholeDate = new Date(`${month}, ${day}, ${year}`);
    let nameOfDay = wholeDate.getDay()

    return week[nameOfDay]

};