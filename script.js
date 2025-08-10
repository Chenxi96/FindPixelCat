

window.onload = function() {
    var cat = document.getElementById("cat");
    var fireplace = document.getElementById("fireplace")
    var cat2 = document.getElementById("cat2");
    var cat3 = document.getElementById("cat3");
    var player = document.getElementById("player");
    var scene = document.getElementById("scene")
    player.focus();

    var positionX = 0;
    var positionY = 0;

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
        var scenePosition = scene.getBoundingClientRect();
        var playerPosition = player.getBoundingClientRect();
        console.log(playerPosition.right, scenePosition.right)

        if(event.key === "ArrowRight") { // right
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
            if(playerPosition.bottom < scenePosition.bottom - 32) {
                player.style.backgroundImage = "url('./sprite/Player\ down.svg')"
                positionY +=32
                player.style.top = positionY + "px";
            } else {
                
            }
        } else if(event.key === "ArrowUp") { // up
            if(playerPosition.top > scenePosition.top + 62) {
                player.style.backgroundImage = "url('./sprite/Player\ up.svg')"
                positionY -=32
                player.style.top = positionY + "px";
            } else {

            }
            
        }
        

    }

    




    player.onkeydown = function(event) {
        move(event)
    };

    // document.onkeydown = move;
    
    document.onkeyup = function(event) {
        player.style.backgroundImage = "url('./sprite/Player\ idle.svg')"
    }
}