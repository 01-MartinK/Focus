const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function update_values() {
    const date = new Date();
    const hours_label = document.querySelector('.hours');
    const minutes_label = document.querySelector('.minutes');
    const seconds_label = document.querySelector('.seconds');
    const date_label = document.querySelector('.date').firstChild;

    hours_label.textContent = checkTime(date.getHours());
    minutes_label.textContent = checkTime(date.getMinutes());
    seconds_label.textContent = checkTime(date.getSeconds());
    date_label.textContent = `${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]}`;

    setTimeout(update_values, 1000);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

update_values()

