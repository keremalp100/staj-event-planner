function getData() {

    const defaultEvents = [
        {
            id: 1,
            title: "UI/UX Workshop",
            date: "2026-08-03",
            time: "09:00",
            location: "Antalya",
            fixed: true
        },
        {
            id: 2,
            title: "Kariyer Günleri",
            date: "2026-08-05",
            time: "16:00",
            location: "Gaziantep",
            fixed: true
        },
        {
            id: 3,
            title: "Yazılım Semineri",
            date: "2026-09-02",
            time: "12:00",
            location: "Ankara",
            fixed: true
        },
        {
            id: 4,
            title: "Fotoğraf Workshop",
            date: "2026-09-04",
            time: "12:30",
            location: "İstanbul",
            fixed: true
        },
        {
            id: 5,
            title: "Pazarlama Zirvesi",
            date: "2026-09-15",
            time: "09:00",
            location: "İstanbul",
            fixed: true
        },
        {
            id: 6,
            title: "UX Kampı",
            date: "2026-10-01",
            time: "15:30",
            location: "İstanbul",
            fixed: true
        },
        {
            id: 7,
            title: "İnsan Kaynakları Semineri",
            date: "2026-10-12",
            time: "14:00",
            location: "Trabzon",
            fixed: true
        },
        {
            id: 8,
            title: "Girişimcilik Zirvesi",
            date: "2026-10-27",
            time: "13:00",
            location: "Bursa",
            fixed: true
        }
    ];

    defaultEvents.forEach(function (event) {

        event.status =
            new Date(event.date + "T" + event.time) > new Date()
                ? "Yaklaşan"
                : "Tamamlandı";

    });


    const data = localStorage.getItem("eventPlanner");


    if (data) {

        const savedData = JSON.parse(data);

        if (!savedData.events) {
            savedData.events = [];
        }

        defaultEvents.forEach(function (defaultEvent) {

            const exists = savedData.events.some(function (event) {

                return event.id === defaultEvent.id;

            });

            if (!exists) {
                savedData.events.push(defaultEvent);
            }

        });

        if (!savedData.settings) {
            savedData.settings = {};
        }

        saveData(savedData);

        return savedData;
    }


    const newData = {
        events: defaultEvents,
        settings: {}
    };

    saveData(newData);

    return newData;
}

function saveData(data) {

    localStorage.setItem(
        "eventPlanner",
        JSON.stringify(data)
    );

}


function getCalendarEvents() {

    const data = getData();

    const events = data.events.filter(function (event) {

        const deletedEvents =
    JSON.parse(
        sessionStorage.getItem("deletedEvents")
    ) || [];

return !deletedEvents.includes(event.id);

    });

    events.sort(function (a, b) {

        const dateTimeA = new Date(
            a.date + "T" + a.time
        );

        const dateTimeB = new Date(
            b.date + "T" + b.time
        );

        return dateTimeA - dateTimeB;

    });

    return events;
}




function getUpcomingEvents() {

    const events = getCalendarEvents();

    const now = new Date();

    return events
        .filter(function (event) {

            return new Date(
                event.date + "T" + event.time
            ) > now;

        })
        .sort(function (a, b) {

            return new Date(
                a.date + "T" + a.time
            ) - new Date(
                b.date + "T" + b.time
            );

        });

}


function getCompletedEvents() {

    const events = getCalendarEvents();

    const now = new Date();

    return events.filter(function (event) {

        return new Date(
            event.date + "T" + event.time
        ) <= now;

    });

}


function getEventCounts() {

    const events = getCalendarEvents();

    const upcomingEvents = getUpcomingEvents();
    const completedEvents = getCompletedEvents();

    return {
        total: events.length,
        upcoming: upcomingEvents.length,
        completed: completedEvents.length
    };

}