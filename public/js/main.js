(function () {

    var timeElement, eventTime, currentTime, duration, interval, intervalId;

    interval = 1000; // 1 second

  // get time element
  timeElement = document.querySelector("time");
  titleTimeElement = document.querySelector(".title-time");
    // calculate difference between two times
    eventTime = moment.tz("2021-04-12", "America/Los_Angeles");
    // based on time set in user's computer time / OS
    currentTime = moment.tz();
    // get duration between two times
    duration = moment.duration(eventTime.diff(currentTime));

    // loop to countdown every 1 second
    setInterval(function() {
        // get updated duration
        duration = moment.duration(duration - interval, 'milliseconds');

        // if duration is >= 0
        if (duration.asSeconds() <= 0) {
            clearInterval(intervalId);
            // hide the countdown element
            timeElement.classList.add("hidden");
        } else {
            // otherwise, show the updated countdown
            timeElement.innerText = Math.floor(duration.asDays()) + " Hari ";
            titleTimeElement.innerText = Math.floor(duration.asDays()) + " Hari Menuju Ramadhan";
        }
    }, interval);

}());

