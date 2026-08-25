const calendarHeader = document.querySelector(".calendar-header");

let previousButton;
let nextButton;
let monthTitle;
let eventList;

if (calendarHeader) {

    previousButton = calendarHeader.querySelector("button:first-child");
    nextButton = calendarHeader.querySelector("button:last-child");
    monthTitle = calendarHeader.querySelector("h2");
    eventList = document.querySelector(".event-list");

}





let currentMonth = 7;





if (calendarHeader) {

    previousButton.addEventListener("click", function () {

        if (currentMonth > 7) {
            currentMonth--;
    showMonth(currentMonth);

        }

    });


    nextButton.addEventListener("click", function () {

        if (currentMonth < 9) {
            currentMonth++;
            showMonth(currentMonth);
        }

    });

}





function showMonth(month) {

    const monthNames = {
        7: "Ağustos ",
        8: "Eylül ",
        9: "Ekim "
    };

    monthTitle.textContent = monthNames[month] + " 2026";

    eventList.innerHTML = "";

    const events = getCalendarEvents();

    events.forEach(function (event) {

        const eventMonth =
            Number(event.date.split("-")[1]) - 1;

        if (eventMonth !== month) {
            return;
        }

        const dateParts = event.date.split("-");

        const eventElement =
            document.createElement("div");

        eventElement.className = "calendar-event";

        eventElement.innerHTML = `
           <div class="event-date">
    <strong>${dateParts[2]}</strong>
    <span>${monthNames[Number(dateParts[1]) - 1]}</span>
</div>

<h3>${event.title}</h3>

            <div class="event-details">

                <span>
                    <i class="fa-solid fa-clock"></i>
                    ${event.time.replace(":", ".")}
                </span>

                <span>
                    <i class="fa-solid fa-location-dot"></i>
                    ${event.location}
                </span>

            </div>
        `;

        eventList.appendChild(eventElement);

    });

}

if (calendarHeader) {
    showMonth(currentMonth);
}






if (document.querySelector(".dashboard")) {

    const counts = getEventCounts();
    let upcomingEvents = getUpcomingEvents();

const deletedEvent =
    JSON.parse(sessionStorage.getItem("deletedEvent"));

if (deletedEvent) {

    upcomingEvents = upcomingEvents.filter(function (event) {

        return !(
            event.title === deletedEvent.title &&
            event.date === deletedEvent.date &&
            event.time === deletedEvent.time
        );

    });

}

upcomingEvents = upcomingEvents.slice(0, 4);

    const totalCard =
        document.querySelector(".card1 p");

    const upcomingCard =
        document.querySelector(".card2 p");

    const completedCard =
        document.querySelector(".card3 p");


    totalCard.textContent = counts.total;

    upcomingCard.textContent = counts.upcoming;

    completedCard.textContent = counts.completed;


    const calendarHeader = document.querySelector(".calendar-header");

let previousButton;
let nextButton;
let monthTitle;
let eventList;

if (calendarHeader) {

    previousButton = calendarHeader.querySelector("button:first-child");
    nextButton = calendarHeader.querySelector("button:last-child");
    monthTitle = calendarHeader.querySelector("h2");
    eventList = document.querySelector(".event-list");

}





let currentMonth = 7;





if (calendarHeader) {

    previousButton.addEventListener("click", function () {

        if (currentMonth > 7) {
            currentMonth--;
    showMonth(currentMonth);

        }

    });


    nextButton.addEventListener("click", function () {

        if (currentMonth < 9) {
            currentMonth++;
            showMonth(currentMonth);
        }

    });

}





function showMonth(month) {

    const monthNames = {
        7: "Ağustos ",
        8: "Eylül ",
        9: "Ekim "
    };

    monthTitle.textContent = monthNames[month] + " 2026";

    eventList.innerHTML = "";

    const events = getCalendarEvents();

    events.forEach(function (event) {

        const eventMonth =
            Number(event.date.split("-")[1]) - 1;

        if (eventMonth !== month) {
            return;
        }

        const dateParts = event.date.split("-");

        const eventElement =
            document.createElement("div");

        eventElement.className = "calendar-event";

        eventElement.innerHTML = `
           <div class="event-date">
    <strong>${dateParts[2]}</strong>
    <span>${monthNames[Number(dateParts[1]) - 1]}</span>
</div>

<h3>${event.title}</h3>

            <div class="event-details">

                <span>
                    <i class="fa-solid fa-clock"></i>
                    ${event.time.replace(":", ".")}
                </span>

                <span>
                    <i class="fa-solid fa-location-dot"></i>
                    ${event.location}
                </span>

            </div>
        `;

        eventList.appendChild(eventElement);

    });

}

if (calendarHeader) {
    showMonth(currentMonth);
}






if (document.querySelector(".dashboard")) {

    const counts = getEventCounts();
    const upcomingEvents = getUpcomingEvents().slice(0, 4);

    const totalCard =
        document.querySelector(".card1 p");

    const upcomingCard =
        document.querySelector(".card2 p");

    const completedCard =
        document.querySelector(".card3 p");


    totalCard.textContent = counts.total;

    upcomingCard.textContent = counts.upcoming;

    completedCard.textContent = counts.completed;

}


const tbody = document.querySelector(".upcoming-events tbody");

if (tbody) {

    tbody.innerHTML = "";

    upcomingEvents.forEach(function (event) {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${event.title}</td>
            <td>${event.date.split("-").reverse().join(".")}</td>
            <td>${event.time.replace(":", ".")}</td>
            <td>${event.location}</td>
        `;

        tbody.appendChild(row);

    });

}
sessionStorage.removeItem("deletedEvent");
}


const settingsSaveButton = document.querySelector(".setting-form button");

if (settingsSaveButton) {
    settingsSaveButton.addEventListener("click", function () {
        showToast("Ayarlar başarıyla kaydedildi!", "success");
    });
}

function showToast(message, type) {
    const toast = document.querySelector(".toast");

    toast.textContent = message;
    toast.className = "toast " + type + " show";

    setTimeout(function () {
        toast.classList.remove("show");
    }, 1500);
}