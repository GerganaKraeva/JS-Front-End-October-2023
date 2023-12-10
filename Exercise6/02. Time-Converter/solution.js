function attachEventsListeners() {

    let days = document.getElementById('days');
    let btnDays = document.getElementById('daysBtn');
    btnDays.addEventListener('click', convertDays);


    let hours = document.getElementById('hours');
    let btnHours = document.getElementById('hoursBtn');
    btnHours.addEventListener('click', convertHours);


    let minutes = document.getElementById('minutes');
    let btnMinutes = document.getElementById('minutesBtn');
    btnMinutes.addEventListener('click', convertMinutes);


    let seconds = document.getElementById('seconds');
    let btnSeconds = document.getElementById('secondsBtn');
    btnSeconds.addEventListener('click', convertSeconds);

    function convertDays() {
        const userDays = Number(days.value);
        hours.value = userDays * 24;
        minutes.value = hours.value * 60;
        seconds.value = minutes.value * 60;
    }

    function convertHours() {
        const userHours = Number(hours.value);
        days.value = userHours / 24;
        minutes.value = userHours * 60;
        seconds.value = minutes.value * 60;
    }

    function convertMinutes() {
        const userMinutes = Number(minutes.value);
        hours.value = userMinutes / 60;
        days.value = hours.value / 24;
        seconds.value = userMinutes * 60;
    }

    function convertSeconds() {
        const userSeconds = Number(seconds.value);
        minutes.value = userSeconds / 60;
        hours.value = minutes.value / 60 ;
        days.value = hours.value /24;

    }









}