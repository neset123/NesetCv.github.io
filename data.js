  ///refresh page

function refreshPage() {
    location.reload();
  }
///Dateshow
let clickCount = 0; 
let dateInterval;

function dateShow() {
    clickCount++;

if(clickCount % 2 === 1){
    startDateShow();
 } else {
    stopDateshow();
}  
}

    


function updateDate() 
    {
        const date = new Date ()
        let year = date.getFullYear(),
        month = date.getMonth(),
        day = date.getDate(),
        hour = date.getHours(),
        minute = date.getMinutes(),
        second = date.getSeconds(),
        dayName = date.getDay()
        let months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
        ]
        let days = [ 
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday'
        ]
        let humanReadableDate = `${day} ${months[month]} ${year}, ${days[dayName]}, ${hour}:${minute}:${second}`
        document.getElementById("Date").innerHTML = humanReadableDate; 

    }
function startDateShow() {
    updateDate(); 
    dateInterval = setInterval(updateDate, 1000);  
    document.getElementById("dateClose").innerHTML = "Close Date";
}
function stopDateshow() {
    clearInterval(dateInterval);
    document.getElementById('Date').innerHTML = '';
    document.getElementById("dateClose").innerHTML = "Show Date";
}


  function toggleMode() {
    let body = document.body;
  
    if (body.classList.contains('light-mode')) {
      body.classList.remove('light-mode');
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
      body.classList.add('light-mode');
    }
  }
