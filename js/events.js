const eventForm = document.querySelector(".event-form");

if (eventForm) {

    const titleInput = eventForm.querySelector(
        'input[placeholder="Etkinlik adı giriniz"]'
    );

    

    const dateInput = eventForm.querySelector('input[type="date"]');

    const timeInput = eventForm.querySelector('input[type="time"]');

    const locationInput = eventForm.querySelector(
        'input[placeholder="Konum giriniz"]'
    );

    const cancelButton = eventForm.querySelector("button:first-child");

    const saveButton = eventForm.querySelector("button:last-child");


    saveButton.addEventListener("click", function () {

        if (
            titleInput.value === "" ||
            
            dateInput.value === "" ||
            timeInput.value === "" ||
            locationInput.value === ""
        ) {
            showToast("Lütfen tüm alanları doldurun!", "warning");
return;
        }

       if (document.querySelector(".edit-page")) {

    showToast("Etkinlik güncellendi!", "info");

} else {


const data = getData();

const newEvent = {
    id: Date.now(),
    title: titleInput.value,
    
    date: dateInput.value,
    time: timeInput.value,
    location: locationInput.value,
    status:
    new Date(dateInput.value + "T" + timeInput.value) > new Date()
        ? "Yaklaşan"
        : "Tamamlandı"
};

data.events.push(newEvent);

saveData(data);


    showToast("Etkinlik başarıyla eklendi!", "success");

}

setTimeout(function () {
    window.location.href = "events.html";
}, 1500);

    });


    cancelButton.addEventListener("click", function () {

        window.location.href = "events.html";

    });

}


const addEventButton = document.querySelector(".events-actions button");

if (addEventButton) {

    addEventButton.addEventListener("click", function () {

        window.location.href = "add-event.html";

    });

}

function deleteEvent(button) {

    const confirmDelete = confirm(
        "Bu etkinliği silmek istediğinize emin misiniz?"
    );

    if (!confirmDelete) {
        return;
    }

    const row = button.closest("tr");
    const eventId = Number(row.dataset.id);

    const data = getData();

    const event = data.events.find(function (event) {
        return event.id === eventId;
    });

    if (!event) {
        return;
    }

    if (event.fixed) {

        let deletedEvents =
            JSON.parse(
                sessionStorage.getItem("deletedEvents")
            ) || [];

        const alreadyDeleted = deletedEvents.some(function (id) {
            return id === eventId;
        });

        if (!alreadyDeleted) {
            deletedEvents.push(eventId);
        }

        sessionStorage.setItem(
            "deletedEvents",
            JSON.stringify(deletedEvents)
        );

    } else {

        data.events = data.events.filter(function (event) {
            return event.id !== eventId;
        });

        saveData(data);
    }

    row.remove();

    showToast("Etkinlik silindi!", "error");
}

const searchInput = document.querySelector(
    '.events-actions input[placeholder="Ara..."]'
);

if (searchInput) {

    searchInput.addEventListener("input", function () {

        const searchText = searchInput.value.toLowerCase();

        const rows = document.querySelectorAll("tbody tr");

        rows.forEach(function (row) {

            const eventName = row.children[0].textContent.toLowerCase();

            if (eventName.includes(searchText)) {
                row.style.display = "";
            } else {
                row.style.display = "none";
            }

        });

    });

}


const statusFilter = document.querySelector(".statusFilter");

if (statusFilter) {

    statusFilter.addEventListener("change", function () {

        const selectedStatus = statusFilter.value;

        const rows = document.querySelectorAll("tbody tr");

        rows.forEach(function (row) {

            const eventStatus = row.children[4].textContent;

            if (
                selectedStatus === "all" ||
                (selectedStatus === "upcoming" && eventStatus === "Yaklaşan") ||
                (selectedStatus === "completed" && eventStatus === "Tamamlandı")
            ) {
                row.style.display = "";
            } else {
                row.style.display = "none";
            }

        });

    });

}



function showToast(message, type) {

    const toast = document.querySelector(".toast");

    toast.textContent = message;

    toast.className = "toast " + type + " show";

    setTimeout(function () {
        toast.classList.remove("show");
    }, 3000);

}







function loadEvents() {

    const data = getData();

const deletedEvents =
    JSON.parse(
        sessionStorage.getItem("deletedEvents")
    ) || [];

    const tbody = document.querySelector("tbody");

    if (!tbody) {
        return;
    }

    data.events
    .filter(function (event) {
        return !deletedEvents.includes(event.id);
    })
    .forEach(function (event) {

        const row = document.createElement("tr");

        row.dataset.id = event.id;

        row.innerHTML = `
            <td>${event.title}</td>
            <td>${event.date.split("-").reverse().join(".")}</td>
            <td>${event.time.replace(":", ".")}</td>
            <td>${event.location}</td>
            <td>${event.status}</td>
            <td>
                <i class="fa-solid fa-pen" onclick="editEvent(this)"></i>
                <i class="fa-solid fa-trash" onclick="deleteEvent(this)"></i>
            </td>
        `;

        tbody.appendChild(row);

    });


    const rows = Array.from(tbody.querySelectorAll("tr"));


    rows.sort(function (a, b) {

        const dateA = a.children[1].textContent
            .split(".")
            .reverse()
            .join("-");

        const dateB = b.children[1].textContent
            .split(".")
            .reverse()
            .join("-");

        const timeA = a.children[2].textContent
            .replace(".", ":");

        const timeB = b.children[2].textContent
            .replace(".", ":");

        const dateTimeA = new Date(
            dateA + "T" + timeA
        );

        const dateTimeB = new Date(
            dateB + "T" + timeB
        );

        return dateTimeA - dateTimeB;

    });


    rows.forEach(function (row) {

        tbody.appendChild(row);

    });

}


loadEvents();


function editEvent(button) {

    const row = button.closest("tr");

    const eventId = row.dataset.id;

    if (!eventId) {
        return;
    }

    window.location.href = "edit-event.html?id=" + eventId;

}


const editForm = document.querySelector(".edit-page");

if (editForm) {

    const params = new URLSearchParams(window.location.search);

    const eventId = params.get("id");

    const data = getData();

    const event = data.events.find(function (event) {
        return event.id == eventId;
    });

    if (event) {

       const titleInput = editForm.querySelector(
        'input[placeholder="Etkinlik adı giriniz"]'
    );

    const dateInput = editForm.querySelector('input[type="date"]');

    const timeInput = editForm.querySelector('input[type="time"]');

    const locationInput = editForm.querySelector(
        'input[placeholder="Konum giriniz"]'
    );

    titleInput.value = event.title;
    dateInput.value = event.date;
    timeInput.value = event.time;
    locationInput.value = event.location;

    }


    const saveButton = editForm.querySelector("button:last-child");

saveButton.addEventListener("click", function () {

    const titleInput = editForm.querySelector(
        'input[placeholder="Etkinlik adı giriniz"]'
    );

   

    const dateInput = editForm.querySelector('input[type="date"]');

    const timeInput = editForm.querySelector('input[type="time"]');

    const locationInput = editForm.querySelector(
        'input[placeholder="Konum giriniz"]'
    );


    if (
        titleInput.value === "" ||
        descriptionInput.value === "" ||
        dateInput.value === "" ||
        timeInput.value === "" ||
        locationInput.value === ""
    ) {
        showToast("Lütfen tüm alanları doldurun!", "warning");
        return;
    }


    event.title = titleInput.value;
    
    event.date = dateInput.value;
    event.time = timeInput.value;
    event.location = locationInput.value;


    const eventIndex = data.events.findIndex(function (item) {
        return item.id == eventId;
    });

    data.events[eventIndex] = event;

    saveData(data);


    showToast("Etkinlik başarıyla güncellendi!", "success");


    setTimeout(function () {
        window.location.href = "events.html";
    }, 1500);

});

}