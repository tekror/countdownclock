function CustomDate(dateArray) {
  if (dateArray) {
    this.date = new Date(dateArray[2], (dateArray[1]-1), dateArray[0], dateArray[3], dateArray[4], dateArray[5])
  }
  else {
    this.date = new Date()
  }

  this.day = this.date.getDate()
  this.month = (this.date.getMonth()+1)
  this.year = this.date.getFullYear()
  this.hour = this.date.getHours()
  this.minute = this.date.getMinutes()
  this.second = this.date.getSeconds()
  this.time = this.date.getTime()

  if (this.hour < 10) {
    this.hour = '0' + this.hour
  }

  if (this.minute < 10) {
    this.minute = '0' + this.minute
  }

  if (this.second < 10) {
    this.second = '0' + this.second
  }

  this.formatted = this.day + "/"
                  + this.month  + "/"
                  + this.year + " "
                  + this.hour + ":"
                  + this.minute + ":"
                  + this.second
}

function getFutureDate() {
  let dateEntered = document.getElementById('timeBox').value
  let dateArray = dateEntered.split(/[/\s:]/)
  let futureDate = new CustomDate(dateArray)
  return futureDate
}

function timeBetween(date1, date2) {
  let date1Ms = date1.time
  let date2Ms = date2.time
  let secondsDifference = (date2Ms - date1Ms) / 1000
  let minutesDifference = secondsDifference / 60
  let hoursDifference = minutesDifference / 60
  let daysDifference = hoursDifference / 24

  let seconds = Math.floor(secondsDifference % 60)
  let minutes = Math.floor(minutesDifference % 60)
  let hours = Math.floor(hoursDifference % 24)
  let days = Math.floor(daysDifference)

  return days + ' days, ' + hours + ' hours, ' + minutes + ' minutes and ' + seconds + ' seconds'
}

function displayTimeDifference() {
  let currentDate = new CustomDate()
  let futureDate = getFutureDate()
  document.getElementById('countdownDiv').innerHTML = '<p>The time between</p><b>' + currentDate.formatted + '</b><p>and</p><b>' + futureDate.formatted + '</b></p><h3>is '+ timeBetween(currentDate, futureDate) + '</h3>'
}
