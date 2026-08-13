const eventForm = document.querySelector(".event-form");

if (eventForm) {

    const titleInput = eventForm.querySelector(
        'input[placeholder="Etkinlik adı giriniz"]'
    );

    const descriptionInput = eventForm.querySelector("textarea");

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
            descriptionInput.value === "" ||
            dateInput.value === "" ||
            timeInput.value === "" ||
            locationInput.value === ""
        ) {
            alert("Lütfen tüm alanları doldurunuz.");
            return;
        }

        alert("Etkinlik başarıyla eklendi.");

        window.location.href = "events.html";

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