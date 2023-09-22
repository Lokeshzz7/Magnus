

document.addEventListener('DOMContentLoaded', () => {
  // Set your custom end date and time
  var customEndDate = new Date("2023-09-23T10:00:00").getTime() / 1000; // Replace with your desired end date and time

  // Set up FlipDown
  var flipdown = new FlipDown(customEndDate)

    // Start the countdown
    .start()

    // Do something when the countdown ends
    .ifEnded(() => {
      console.log('The countdown has ended!');
    });

  // Toggle theme
  var interval = setInterval(() => {
    let body = document.body;
    body.classList.add('light-theme');
    body.querySelector('#flipdown').classList.add('flipdown__theme-light');
  }, 0);

  // Show version number
  var ver = document.getElementById('ver');
  ver.innerHTML = flipdown.version;
});
