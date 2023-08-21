window.onload = function() {
    // Add scroll event listener
    console.log("in");
  
    window.addEventListener('scroll', function() {
      debugger
        console.log(button);
      var button = document.getElementById('movingButton');
      console.log(button);
  
      var scrollPosition = window.scrollX;
      console.log(button);
  
      if (scrollPosition > 0) {
        button.classList.add('moving');
      } else {
        button.classList.remove('moving');
      }
    });
  };