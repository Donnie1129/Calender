  // Get the current hour, current day, and current day of the week
  // un comment line 6 to easily have the ability to test the
  // code with different times to ensure that it works correctly
  $(function () {
    var currentHour = dayjs().hour();
    //var currentHour = dayjs('2022-01-01 13:00:00').hour();
    var currentDay = dayjs().format("MMM DD, YYYY");
    var currentDayOfWeek = dayjs().format("dddd");
  
    // Update the current day display in the header
    document.getElementById("currentDay").textContent =
      currentDayOfWeek + ", " + currentDay;
  
    // Apply appropriate classes to each time block
    $(".time-block").each(function () {
      var hourId = $(this).attr("id");
      var hour = parseInt(hourId.split("-")[1]);
  
      if (hour < currentHour) {
        $(this).addClass("row time-block past");
      } else if (hour === currentHour) {
        $(this).addClass("row time-block present");
      } else {
        $(this).addClass("row time-block future");
      }
  
        // Event listener for save button clicks
    $(".saveBtn").on("click", function () {
      var hourId = $(this).closest(".time-block").attr("id");
      var userInput = $(this).siblings(".description").val();
      localStorage.setItem(hourId, userInput);
    });
  
      // Retrieve user input from local storage and set textarea values
      var userInput = localStorage.getItem(hourId);
      if (userInput) {
        $(this).find(".description").val(userInput);
      }
    });
  });