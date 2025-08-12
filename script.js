

window.onload = function() {
    // Grabbed the elements from the HTML
    var cat = document.getElementById("cat"); // Cat 1 element
    var cat2 = document.getElementById("cat2"); // Cat 2 element 
    var cat3 = document.getElementById("cat3"); // Cat 3 element
    var player = document.getElementById("player"); // player div element
    var scene = document.getElementById("scene") // main element
    var body = document.getElementsByTagName("body")[0]; // body element
    var count = document.getElementById("count"); // count span
    var heading2 = document.getElementsByTagName("h2")[0]; // h2 element

    count.innerText = 0; // Initialize count span with 0 

    player.focus(); // Focus on the player element
    var commentP = document.createElement("p");
    body.appendChild(commentP);

    // X-axis  and Y-axis position
    var positionX = 0;
    var positionY = 0;

    // onclick event functions
    cat.onclick = function() {
        this.style.opacity = "1";
    }
    cat2.onclick = function() {
        this.style.opacity = "1";
    }
    cat3.onclick = function() {
        this.style.opacity = "1";
    }


    function move(event) {
        // Get elements current position
        var scenePosition = scene.getBoundingClientRect();
        var playerPosition = player.getBoundingClientRect();
        var catPosition = cat.getBoundingClientRect();
        var cat2Position = cat2.getBoundingClientRect();
        var cat3Position = cat3.getBoundingClientRect();
        
        if(event.key === "ArrowRight") { // right
            // 
            if(playerPosition.right < scenePosition.right) {
                positionX += 32
                player.style.backgroundImage = "url('./sprite/Player\ right.svg')"
                player.style.left = positionX + "px";
            } else {

            }
            
        } else if(event.key === "ArrowLeft") { // left
            if(playerPosition.left > scenePosition.left) {
                player.style.backgroundImage = "url('./sprite/Player\ left.svg')"
                positionX -= 32
                player.style.left = positionX + "px";
            } else {

            }
        } else if(event.key === "ArrowDown") { // down
            if(playerPosition.bottom < scenePosition.bottom ) {
                player.style.backgroundImage = "url('./sprite/Player\ down.svg')"
                positionY +=32
                player.style.top = positionY + "px";
            } else {
                
            }
        } else if(event.key === "ArrowUp") { // up
            if(playerPosition.top > scenePosition.top + 32) {
                player.style.backgroundImage = "url('./sprite/Player\ up.svg')"
                positionY -=32
                player.style.top = positionY + "px";
            } else {

            }
        }

        // When Space bar is pressed
        if(event.code === "Space") {
            // If it is near cat
            if(catPosition.bottom > playerPosition.top && catPosition.left < playerPosition.right && catPosition.right > playerPosition.left) {
                cat.style.opacity = "1";
                commentP.innerText = "Congrats you find a cat!"
                localStorage.setItem("counter1", 1)

                count.innerText = parseInt(count.innerText) + 1;

                setTimeout(function() {
                    commentP.innerText = "";
                }, 2000);
            }
            // if it is near cat 2
            if(cat2Position.bottom > playerPosition.top && cat2Position.left < playerPosition.right && cat2Position.right > playerPosition.left) {
                cat2.style.opacity = "1";
                commentP.innerText = "Congrats you find a cat!"
                localStorage.setItem("Counter2", 1)
                count.innerText = parseInt(count.innerText) + 1;
                setTimeout(function() {
                    commentP.innerText = "";
                }, 2000)
            } 
            // if it is near cat 3
            if(cat3Position.bottom > playerPosition.top && cat3Position.left < playerPosition.right && cat3Position.right > playerPosition.left) {
                cat3.style.opacity = "1";
                commentP.innerText = "Congrats you find a cat!"
                localStorage.setItem("counter3", 1)
                count.innerText = parseInt(count.innerText) + 1;
                setTimeout(function() {
                    commentP.innerText = "";
                }, 2000)
            }

            // Show the congratulation text if all cats are found
            if(parseInt(count.innerText) === 3) {
                heading2.style.left = "25vw";
            }
        }
    }

    


    // When arrow key down and pause key down run this function
    player.onkeydown = function(event) {
        move(event)
    };

    // When key is released player will run the idle animation
    document.onkeyup = function(event) {
        player.style.backgroundImage = "url('./sprite/Player\ idle.svg')"
    }
}