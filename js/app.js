const calendarHeader = document.querySelector(".calendar-header");

const previousButton = calendarHeader.querySelector("button:first-child");
const nextButton = calendarHeader.querySelector("button:last-child");

const monthTitle = calendarHeader.querySelector("h2");

const eventList = document.querySelector(".event-list");


const months = {

    7: {
        name: "Ağustos 2026",
        events: [
            {
                day: "03",
                month: "Ağustos",
                title: "UI/UX Workshop",
                time: "09.00",
                location: "Antalya"
            },
            {
                day: "05",
                month: "Ağustos",
                title: "Kariyer Günleri",
                time: "16.00",
                location: "Gaziantep"
            },
        ]
    },

    8: {
        name: "Eylül 2026",
        events: [
            {
                day: "02",
                month: "Eylül",
                title: "Yazılım Semineri",
                time: "12.00",
                location: "Ankara"
            },
            {
                day: "04",
                month: "Eylül",
                title: "Fotoğraf Workshop",
                time: "12.30",
                location: "İstanbul"
            },
            {
                day: "15",
                month: "Eylül",
                title: "Pazarlama Zirvesi",
                time: "09.00",
                location: "İstanbul"
            }
        ]
    },

    9: {
        name: "Ekim 2026",
        events: [
            {
                day: "01",
                month: "Ekim",
                title: "UX Kampı",
                time: "15.30",
                location: "İstanbul"
            },
            {
                day: "12",
                month: "Ekim",
                title: "İnsan Kaynakları Semineri",
                time: "14.00",
                location: "Trabzon"
            },
            {
                day: "27",
                month: "Ekim",
                title: "Girişimcilik Zirvesi",
                time: "13.00",
                location: "Bursa"
            }
        ]
    }

};


let currentMonth = 8;


function showMonth(month) {

    const monthData = months[month];

    monthTitle.textContent = monthData.name;

    eventList.innerHTML = "";

    monthData.events.forEach(function (event) {

        eventList.innerHTML += `
            <div class="calendar-event">

                <div class="event-date">
                    <strong>${event.day}</strong>
                    <span>${event.month}</span>
                </div>

                <h3>${event.title}</h3>

                <div class="event-details">

                    <span>
                        <i class="fa-solid fa-clock"></i>
                        ${event.time}
                    </span>

                    <span>
                        <i class="fa-solid fa-location-dot"></i>
                        ${event.location}
                    </span>

                </div>

            </div>
        `;

    });

}


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