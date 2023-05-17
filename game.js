
      // Get the canvas element and its 2D context
      var canvas = document.getElementById("myCanvas");
      var ctx = canvas.getContext("2d");

      // Initial position of the game character
      var x = canvas.width / 2;
      var y = canvas.height - 30;

      // Movement variables
      var dx = 2;
      var dy = -2;

      // Function to draw the game character
      function drawCharacter() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, Math.PI * 2);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
      }

      // Function to update the game character's position
      function updatePosition() {
        x += dx;
        y += dy;
      }

      // Function to animate the game
      function draw() {
        drawCharacter();
        updatePosition();

        // Reverse direction if the character hits the canvas boundaries
        if (x + dx > canvas.width || x + dx < 0) {
          dx = -dx;
        }
        if (y + dy > canvas.height || y + dy < 0) {
          dy = -dy;
        }

        requestAnimationFrame(draw);
      }

      // Start the game animation
      draw();
    
        ///Counting
  let reviewCount = 0;

  // Function to increment the review count
  function incrementCount() {
    reviewCount++;
    updateCount();
  }

  // Function to update the count display
  function updateCount() {
    let countElement = document.getElementById("count");
    countElement.textContent = reviewCount;
  }
      