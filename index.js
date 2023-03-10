today = new Date();
currentMonth = today.getMonth();
currentYear = today.getFullYear();
selectYear = document.getElementById("year");
selectMonth = document.getElementById("month");

months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

monthAndYear = document.getElementById("monthAndYear");
showCalendar(currentMonth, currentYear);


function select() {
    currentYear = parseInt(selectYear.value);
    currentMonth = parseInt(selectMonth.value);
    showCalendar(currentMonth, currentYear);
}
function toggle() {
    var table = document.getElementById("calendar-body");
    if (table.style.color === "green") {
    } else {
      table.style.color = "black";
    }
  }

function showCalendar(month, year) {

    let firstDay = (new Date(year, month)).getDay();
    table = document.getElementById("calendar-body"); 
    table.innerHTML = "";


    monthAndYear.innerHTML = months[month] + " " + year;
    selectYear.value = year;
    selectMonth.value = month;
    let date = 1;
    for (let i = 0; i < 6; i++) {
        let row = document.createElement("tr");

        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                cell = document.createElement("td");
                cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
            else if (date > daysInMonth(month, year)) {
                break;
            }

            else {
                cell = document.createElement("td");
                cellText = document.createTextNode(date);
                if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                    cell.classList.add("bg-success");
                } 
                cell.appendChild(cellText);
                row.appendChild(cell);
                date++;
            }


        }

        table.appendChild(row);
    }

}

function daysInMonth(iMonth, iYear) {
    return 32 - new Date(iYear, iMonth, 32).getDate();
}