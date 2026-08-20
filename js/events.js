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
            showToast("Lütfen tüm alanları doldurun!", "warning");
return;
        }

       if (document.querySelector(".edit-page")) {

    showToast("Etkinlik güncellendi!", "info");

} else {

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

    if (confirmDelete) {

        const row = button.closest("tr");

        row.remove();
        showToast("Etkinlik silindi!", "error");

    }

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