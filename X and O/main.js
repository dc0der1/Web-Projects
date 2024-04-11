// Variables
let top_left = document.getElementById('top-left');
let top_mid = document.getElementById('top-mid');
let top_right = document.getElementById('top-right');

let mid_left = document.getElementById('mid-left');
let mid_mid = document.getElementById('mid-mid');
let mid_right = document.getElementById('mid-right');

let bottom_left = document.getElementById('bottom-left');
let bottom_mid = document.getElementById('bottom-mid');
let bottom_right = document.getElementById('bottom-right');

let top_L = undefined
let top_M = undefined
let top_R = undefined

let mid_L = undefined
let mid_M = undefined
let mid_R = undefined

let bottom_L = undefined
let bottom_M = undefined
let bottom_R = undefined

let player_1 = true
let player_2 = false

let isX = true
let isO = false

let counter = 0

let finnished = false
let won = false

let audioP1 = new Audio()
audioP1.src = "./audio/player1.mp3"

let audioP2 = new Audio()
audioP2.src = "./audio/player2.mp3"

let mouseEvent = new MouseEvent("myclick", {
    cancelable: true
})

// EventListeners
// Top listeners
top_left.addEventListener("click", function topLeft() {

    if (finnished === true) {
        top_left.removeEventListener(topLeft)
    }
    
    counter += 1

    if (player_1 === true) {
        top_left.textContent = "X";
        top_left.style.backgroundColor = "rgb(230, 90, 90)";
        player_1 = false
        top_L = true
        player_2 = true
        audioP1.play()
    } else if (player_2 === true) {
        top_left.textContent = "O";
        top_left.style.backgroundColor = "rgb(94, 94, 236)"
        player_1 = true
        top_L = false
        player_2 = false
        audioP2.play()
    }

    // All Tops
    if (top_L === isX && top_M === isX && top_R === isX) {

        finnished = true
        won = true

        let winTitle = document.createElement("h1");
        winTitle.setAttribute("id", "win-title");
        winTitle.textContent = "Player 1 won";
        document.body.appendChild(winTitle);

        setTimeout(() => {
            // Resets entire game
            location.reload()
        }, 3000);
        
    }

    if (top_L === isO && top_M === isO && top_R === isO) {

        finnished = true
        won = true
        
        let winTitle = document.createElement("h1");
        winTitle.setAttribute("id", "win-title");
        winTitle.textContent = "Player 2 won";
        winTitle.style.color = "rgb(94, 94, 236)";
        document.body.appendChild(winTitle);

        setTimeout(() => {
            // Resets entire game
            location.reload()
        }, 3000);
        
    }

    // All Left (vertically)
    if (top_L === isX && mid_M === isX && bottom_R === isX) {

        finnished = true
        won = true
        
        let winTitle = document.createElement("h1");
        winTitle.setAttribute("id", "win-title");
        winTitle.textContent = "Player 1 won";
        document.body.appendChild(winTitle);

        setTimeout(() => {
            // Resets entire game
            location.reload()
        }, 3000);
        
    }

    if (top_L === isO && mid_L === isO && bottom_R === isO) {

        finnished = true
        won = true
        
        let winTitle = document.createElement("h1");
        winTitle.setAttribute("id", "win-title");
        winTitle.textContent = "Player 2 won";
        winTitle.style.color = "rgb(94, 94, 236)";
        document.body.appendChild(winTitle);

        setTimeout(() => {
            // Resets entire game
            location.reload()
        }, 3000);
        
    }

    // Draw
    if (counter === 9 && won === false) {

        finnished = true

        let winTitle = document.createElement("h1");
        winTitle.setAttribute("id", "win-title");
        winTitle.textContent = "Draw";
        winTitle.style.color = "white";
        document.body.appendChild(winTitle);

        setTimeout(() => {
            // Resets entire game
            location.reload()
        }, 3000);        

    }

    top_left.removeEventListener("click", topLeft)

})

top_mid.addEventListener("click", function topMid() {

    if (finnished === true) {
        top_left.removeEventListener(topMid)
    }

    counter += 1

    if (player_1 === true) {
        top_mid.textContent = "X";
        top_mid.style.backgroundColor = "rgb(230, 90, 90)";
        player_1 = false
        top_M = true
        player_2 = true
        audioP1.play()
    } else if (player_2 === true) {
        top_mid.textContent = "O";
        top_mid.style.backgroundColor = "rgb(94, 94, 236)"
        player_1 = true
        top_M = false
        player_2 = false
        audioP2.play()
    }

    // All Tops
    if (top_L === isX && top_M === isX && top_R === isX) {

        finnished = true
        won = true

        let winTitle = document.createElement("h1");
        winTitle.setAttribute("id", "win-title");
        winTitle.textContent = "Player 1 won";
        document.body.appendChild(winTitle);

        setTimeout(() => {
            // Resets entire game
            location.reload()
        }, 3000);
        
    }

    if (top_L === isO && top_M === isO && top_R === isO) {

        finnished = true
        won = true
        
        let winTitle = document.createElement("h1");
        winTitle.setAttribute("id", "win-title");
        winTitle.textContent = "Player 2 won";
        winTitle.style.color = "rgb(94, 94, 236)";
        document.body.appendChild(winTitle);

        setTimeout(() => {
            // Resets entire game
            location.reload()
        }, 3000);
        
    }

    // All Mids (vertically)
    if (top_M === isX && mid_M === isX && bottom_M === isX) {

        finnished = true
        won = true
        
        let winTitle = document.createElement("h1");
        winTitle.setAttribute("id", "win-title");
        winTitle.textContent = "Player 1 won";
        document.body.appendChild(winTitle);

        setTimeout(() => {
            // Resets entire game
            location.reload()
        }, 3000);
        
    }

    if (top_M === isO && mid_M === isO && bottom_M === isO) {
        
        finnished = true
        won = true

        let winTitle = document.createElement("h1");
        winTitle.setAttribute("id", "win-title");
        winTitle.textContent = "Player 2 won";
        winTitle.style.color = "rgb(94, 94, 236)";
        document.body.appendChild(winTitle);

        setTimeout(() => {
            // Resets entire game
            location.reload()
        }, 3000);
        
    }

    // Draw
    if (counter === 9 && won === false) {

        finnished = true

        let winTitle = document.createElement("h1");
        winTitle.setAttribute("id", "win-title");
        winTitle.textContent = "Draw";
        winTitle.style.color = "white";
        document.body.appendChild(winTitle);

        setTimeout(() => {
            // Resets entire game
            location.reload()
        }, 3000);        

    }

    top_mid.removeEventListener("click", topMid)

})

top_right.addEventListener("click", function topRight() {

    if (finnished === true) {
        top_left.removeEventListener(topRight)
    }

    counter += 1

    if (player_1 === true) {
        top_right.textContent = "X";
        top_right.style.backgroundColor = "rgb(230, 90, 90)";
        player_1 = false
        top_R = true
        player_2 = true
        audioP1.play()
    } else if (player_2 === true) {
        top_right.textContent = "O";
        top_right.style.backgroundColor = "rgb(94, 94, 236)"
        player_1 = true
        top_R = false
        player_2 = false
        audioP2.play()
    }

    // All tops
    if (top_L === isX && top_M === isX && top_R === isX) {

        finnished = true
        won = true
        
        let winTitle = document.createElement("h1");
        winTitle.setAttribute("id", "win-title");
        winTitle.textContent = "Player 1 won";
        document.body.appendChild(winTitle);

        setTimeout(() => {
            // Resets entire game
            location.reload()
        }, 3000);
        
    }

    if (top_L === isO && top_M === isO && top_R === isO) {

        finnished = true
        won = true
        
        let winTitle = document.createElement("h1");
        winTitle.setAttribute("id", "win-title");
        winTitle.textContent = "Player 2 won";
        winTitle.style.color = "rgb(94, 94, 236)";
        document.body.appendChild(winTitle);

        setTimeout(() => {
            // Resets entire game
            location.reload()
        }, 3000);
        
    }

    // All Rights
    if (top_R === isX && mid_R === isX && bottom_R === isX) {

        finnished = true
        won = true
        
        let winTitle = document.createElement("h1");
        winTitle.setAttribute("id", "win-title");
        winTitle.textContent = "Player 1 won";
        document.body.appendChild(winTitle);

        setTimeout(() => {
            // Resets entire game
            location.reload()
        }, 3000);
        
    }

    if (top_R === isO && mid_R === isO && bottom_R === isO) {
        
        finnished = true
        won = true

        let winTitle = document.createElement("h1");
        winTitle.setAttribute("id", "win-title");
        winTitle.textContent = "Player 2 won";
        winTitle.style.color = "rgb(94, 94, 236)";
        document.body.appendChild(winTitle);

        setTimeout(() => {
            // Resets entire game
            location.reload()
        }, 3000);
        
    }

    // Diagonal (Right)
    if (top_R === isX && mid_M === isX && bottom_L === isX) {

        finnished = true
        won = true
        
        let winTitle = document.createElement("h1");
        winTitle.setAttribute("id", "win-title");
        winTitle.textContent = "Player 1 won";
        document.body.appendChild(winTitle);

        setTimeout(() => {
            // Resets entire game
            location.reload()
        }, 3000);
        
    }

    if (top_R === isO && mid_M === isO && bottom_L === isO) {

        finnished = true
        won = true
        
        let winTitle = document.createElement("h1");
        winTitle.setAttribute("id", "win-title");
        winTitle.textContent = "Player 2 won";
        winTitle.style.color = "rgb(94, 94, 236)";
        document.body.appendChild(winTitle);

        setTimeout(() => {
            // Resets entire game
            location.reload()
        }, 3000);
        
    }

    // Draw
    if (counter === 9 && won === false) {

        finnished = true

        let winTitle = document.createElement("h1");
        winTitle.setAttribute("id", "win-title");
        winTitle.textContent = "Draw";
        winTitle.style.color = "white";
        document.body.appendChild(winTitle);

        setTimeout(() => {
            // Resets entire game
            location.reload()
        }, 3000);        

    }

    top_right.removeEventListener("click", topRight)

})

// Mid listeners

mid_left.addEventListener("click", function midLeft() {

    if (finnished === true) {
        top_left.removeEventListener(midLeft)
    }

    counter += 1

    if (player_1 === true) {
        mid_left.textContent = "X";
        mid_left.style.backgroundColor = "rgb(230, 90, 90)";
        player_1 = false
        mid_L = true
        player_2 = true
        audioP1.play()
    } else if (player_2 === true) {
        mid_left.textContent = "O";
        mid_left.style.backgroundColor = "rgb(94, 94, 236)"
        player_1 = true
        mid_L = false
        player_2 = false
        audioP2.play()
    }

    // All Mids (Horizontally)
    if (mid_L === isX && mid_M === isX && mid_R === isX) {

        finnished = true
        won = true
                
        let winTitle = document.createElement("h1");
        winTitle.setAttribute("id", "win-title");
        winTitle.textContent = "Player 1 won";
        document.body.appendChild(winTitle);

        setTimeout(() => {
            // Resets entire game
            location.reload()
        }, 3000);
        
    }

    if (mid_L === isO && mid_M === isO && mid_R === isO) {

        finnished = true
        won = true
                
        let winTitle = document.createElement("h1");
        winTitle.setAttribute("id", "win-title");
        winTitle.textContent = "Player 2 won";
        winTitle.style.color = "rgb(94, 94, 236)";
        document.body.appendChild(winTitle);

        setTimeout(() => {
            // Resets entire game
            location.reload()
        }, 3000);
        
    }

    // All left
    if (top_L === isX && mid_L === isX && bottom_L === isX) {

        finnished = true
        won = true
                
        let winTitle = document.createElement("h1");
        winTitle.setAttribute("id", "win-title");
        winTitle.textContent = "Player 1 won";
        document.body.appendChild(winTitle);

        setTimeout(() => {
            // Resets entire game
            location.reload()
        }, 3000);
        
    }

    if (top_L === isO && mid_L === isO && bottom_L === isO) {

        finnished = true
        won = true
                
        let winTitle = document.createElement("h1");
        winTitle.setAttribute("id", "win-title");
        winTitle.textContent = "Player 2 won";
        winTitle.style.color = "rgb(94, 94, 236)";
        document.body.appendChild(winTitle);

        setTimeout(() => {
            // Resets entire game
            location.reload()
        }, 3000);
        
    }

    // Draw
    if (counter === 9 && won === false) {

        finnished = true

        let winTitle = document.createElement("h1");
        winTitle.setAttribute("id", "win-title");
        winTitle.textContent = "Draw";
        winTitle.style.color = "white";
        document.body.appendChild(winTitle);

        setTimeout(() => {
            // Resets entire game
            location.reload()
        }, 3000);        

    }

    mid_left.removeEventListener("click", midLeft)

})

mid_mid.addEventListener("click", function midMid() {

    if (finnished === true) {
        top_left.removeEventListener(midMid)
    }

    counter += 1

    if (player_1 === true) {
        mid_mid.textContent = "X";
        mid_mid.style.backgroundColor = "rgb(230, 90, 90)";
        player_1 = false
        mid_M = true
        player_2 = true
        audioP1.play()
    } else if (player_2 === true) {
        mid_mid.textContent = "O";
        mid_mid.style.backgroundColor = "rgb(94, 94, 236)"
        player_1 = true
        mid_M = false
        player_2 = false
        audioP2.play()
    }

    // All Mids (Horizontally)
    if (mid_L === isX && mid_M === isX && mid_R === isX) {

        finnished = true
        won = true
                        
        let winTitle = document.createElement("h1");
        winTitle.setAttribute("id", "win-title");
        winTitle.textContent = "Player 1 won";
        document.body.appendChild(winTitle);

        setTimeout(() => {
            // Resets entire game
            location.reload()
        }, 3000);
        
    }

    if (mid_L === isO && mid_M === isO && mid_R === isO) {

        finnished = true
        won = true
                        
        let winTitle = document.createElement("h1");
        winTitle.setAttribute("id", "win-title");
        winTitle.textContent = "Player 2 won";
        winTitle.style.color = "rgb(94, 94, 236)";
        document.body.appendChild(winTitle);

        setTimeout(() => {
            // Resets entire game
            location.reload()
        }, 3000);
        
    }

    // All Mids (vertically)
    if (top_M === isX && mid_M === isX && bottom_M === isX) {

        finnished = true
        won = true
                        
        let winTitle = document.createElement("h1");
        winTitle.setAttribute("id", "win-title");
        winTitle.textContent = "Player 1 won";
        document.body.appendChild(winTitle);

        setTimeout(() => {
            // Resets entire game
            location.reload()
        }, 3000);
        
    }

    if (top_M === isO && top_M === isO && bottom_M === isO) {

        finnished = true
        won = true
                        
        let winTitle = document.createElement("h1");
        winTitle.setAttribute("id", "win-title");
        winTitle.textContent = "Player 2 won";
        winTitle.style.color = "rgb(94, 94, 236)";
        document.body.appendChild(winTitle);

        setTimeout(() => {
            // Resets entire game
            location.reload()
        }, 3000);
        
    }

    // Diagonal (Left)
    if (top_L === isX && mid_M === isX && bottom_R === isX) {

        finnished = true
        won = true
                        
        let winTitle = document.createElement("h1");
        winTitle.setAttribute("id", "win-title");
        winTitle.textContent = "Player 1 won";
        document.body.appendChild(winTitle);

        setTimeout(() => {
            // Resets entire game
            location.reload()
        }, 3000);
        
    }

    if (top_L === isO && mid_M === isO && bottom_R === isO) {

        finnished = true
        won = true
                        
        let winTitle = document.createElement("h1");
        winTitle.setAttribute("id", "win-title");
        winTitle.textContent = "Player 2 won";
        winTitle.style.color = "rgb(94, 94, 236)";
        document.body.appendChild(winTitle);

        setTimeout(() => {
            // Resets entire game
            location.reload()
        }, 3000);
        
    }

    // Diagonal (Right)
    if (top_R === isX && mid_M === isX && bottom_L === isX) {

        finnished = true
        won = true
                        
        let winTitle = document.createElement("h1");
        winTitle.setAttribute("id", "win-title");
        winTitle.textContent = "Player 1 won";
        document.body.appendChild(winTitle);

        setTimeout(() => {
            // Resets entire game
            location.reload()
        }, 3000);
        
    }

    if (top_R === isO && mid_M === isO && bottom_L === isO) {

        finnished = true
        won = true
                        
        let winTitle = document.createElement("h1");
        winTitle.setAttribute("id", "win-title");
        winTitle.textContent = "Player 2 won";
        winTitle.style.color = "rgb(94, 94, 236)";
        document.body.appendChild(winTitle);

        setTimeout(() => {
            // Resets entire game
            location.reload()
        }, 3000);
        
    }

    // Draw
    if (counter === 9 && won === false) {

        finnished = true

        let winTitle = document.createElement("h1");
        winTitle.setAttribute("id", "win-title");
        winTitle.textContent = "Draw";
        winTitle.style.color = "white";
        document.body.appendChild(winTitle);

        setTimeout(() => {
            // Resets entire game
            location.reload()
        }, 3000);        

    }
    
    mid_mid.removeEventListener("click", midMid)

})

mid_right.addEventListener("click", function midRight() {

    if (finnished === true) {
        top_left.removeEventListener(midRight)
    }

    counter += 1

    if (player_1 === true) {
        mid_right.textContent = "X";
        mid_right.style.backgroundColor = "rgb(230, 90, 90)";
        player_1 = false
        mid_R = true
        player_2 = true
        audioP1.play()
    } else if (player_2 === true) {
        mid_right.textContent = "O";
        mid_right.style.backgroundColor = "rgb(94, 94, 236)"
        player_1 = true
        mid_R = false
        player_2 = false
        audioP2.play()
    }

    // All Mids
    if (mid_L === isX && mid_M === isX && mid_R === isX) {

        finnished = true
        won = true
                                
        let winTitle = document.createElement("h1");
        winTitle.setAttribute("id", "win-title");
        winTitle.textContent = "Player 1 won";
        document.body.appendChild(winTitle);

        setTimeout(() => {
            // Resets entire game
            location.reload()
        }, 3000);
         
    }

    if (mid_L === isO && mid_M === isO && mid_R === isO) {

        finnished = true
        won = true
                                
        let winTitle = document.createElement("h1");
        winTitle.setAttribute("id", "win-title");
        winTitle.textContent = "Player 2 won";
        winTitle.style.color = "rgb(94, 94, 236)";
        document.body.appendChild(winTitle);

        setTimeout(() => {
            // Resets entire game
            location.reload()
        }, 3000);
        
    }

    // All Rights
    if (top_R === isX && mid_R === isX && bottom_R === isX) {

        finnished = true
        won = true
                                
        let winTitle = document.createElement("h1");
        winTitle.setAttribute("id", "win-title");
        winTitle.textContent = "Player 1 won";
        document.body.appendChild(winTitle);

        setTimeout(() => {
            // Resets entire game
            location.reload()
        }, 3000);
        
    }

    if (top_R === isO && mid_R === isO && bottom_R === isO) {

        finnished = true
        won = true
                                
        let winTitle = document.createElement("h1");
        winTitle.setAttribute("id", "win-title");
        winTitle.textContent = "Player 2 won";
        winTitle.style.color = "rgb(94, 94, 236)";
        document.body.appendChild(winTitle);

        setTimeout(() => {
            // Resets entire game
            location.reload()
        }, 3000);
        
    }

    // Draw
    if (counter === 9 && won === false) {

        finnished = true

        let winTitle = document.createElement("h1");
        winTitle.setAttribute("id", "win-title");
        winTitle.textContent = "Draw";
        winTitle.style.color = "white";
        document.body.appendChild(winTitle);

        setTimeout(() => {
            // Resets entire game
            location.reload()
        }, 3000);        

    }

    mid_right.removeEventListener("click", midRight)

})

// Bottom listeners

bottom_left.addEventListener("click", function bottomLeft() {

    if (finnished === true) {
        top_left.removeEventListener(bottomLeft)
    }

    counter += 1

    if (player_1 === true) {
        bottom_left.textContent = "X";
        bottom_left.style.backgroundColor = "rgb(230, 90, 90)";
        player_1 = false
        bottom_L = true
        player_2 = true
        audioP1.play()
    } else if (player_2 === true) {
        bottom_left.textContent = "O";
        bottom_left.style.backgroundColor = "rgb(94, 94, 236)"
        player_1 = true
        bottom_L = false
        player_2 = false
        audioP2.play()
    }

    // All Bottoms
    if (bottom_L === isX && bottom_M === isX && bottom_R === isX) {

        finnished = true
        won = true
                                
        let winTitle = document.createElement("h1");
        winTitle.setAttribute("id", "win-title");
        winTitle.textContent = "Player 1 won";
        document.body.appendChild(winTitle);

        setTimeout(() => {
            // Resets entire game
            location.reload()
        }, 3000);
        
    }

    if (bottom_L === isO && bottom_M === isO && bottom_R === isO) {

        finnished = true
        won = true
                                
        let winTitle = document.createElement("h1");
        winTitle.setAttribute("id", "win-title");
        winTitle.textContent = "Player 2 won";
        winTitle.style.color = "rgb(94, 94, 236)";
        document.body.appendChild(winTitle);

        setTimeout(() => {
            // Resets entire game
            location.reload()
        }, 3000);
        
    }

    // All left
    if (top_L === isX && mid_L === isX && bottom_L === isX) {

        finnished = true
        won = true
                                
        let winTitle = document.createElement("h1");
        winTitle.setAttribute("id", "win-title");
        winTitle.textContent = "Player 1 won";
        document.body.appendChild(winTitle);

        setTimeout(() => {
            // Resets entire game
            location.reload()
        }, 3000);
        
    }

    if (top_L === isO && mid_L === isO && bottom_L === isO) {

        finnished = true
        won = true
                                
        let winTitle = document.createElement("h1");
        winTitle.setAttribute("id", "win-title");
        winTitle.textContent = "Player 2 won";
        winTitle.style.color = "rgb(94, 94, 236)";
        document.body.appendChild(winTitle);

        setTimeout(() => {
            // Resets entire game
            location.reload()
        }, 3000);
        
    }

    // Diagonal (Right)
    if (top_R === isX && mid_M === isX && bottom_L === isX) {

        finnished = true
        won = true
                                
        let winTitle = document.createElement("h1");
        winTitle.setAttribute("id", "win-title");
        winTitle.textContent = "Player 1 won";
        document.body.appendChild(winTitle);

        setTimeout(() => {
            // Resets entire game
            location.reload()
        }, 3000);
        
    }

    if (top_R === isO && mid_M === isO && bottom_L === isO) {

        finnished = true
        won = true
                                
        let winTitle = document.createElement("h1");
        winTitle.setAttribute("id", "win-title");
        winTitle.textContent = "Player 2 won";
        winTitle.style.color = "rgb(94, 94, 236)";
        document.body.appendChild(winTitle);

        setTimeout(() => {
            // Resets entire game
            location.reload()
        }, 3000);
        
    }

    // Draw
    if (counter === 9 && won === false) {

        finnished = true

        let winTitle = document.createElement("h1");
        winTitle.setAttribute("id", "win-title");
        winTitle.textContent = "Draw";
        winTitle.style.color = "white";
        document.body.appendChild(winTitle);

        setTimeout(() => {
            // Resets entire game
            location.reload()
        }, 3000);        

    }

    bottom_left.removeEventListener("click", bottomLeft)

})

bottom_mid.addEventListener("click", function bottomMid() {

    if (finnished === true) {
        top_left.removeEventListener(bottomMid)
    }

    counter += 1

    if (player_1 === true) {
        bottom_mid.textContent = "X";
        bottom_mid.style.backgroundColor = "rgb(230, 90, 90)";
        player_1 = false
        bottom_M = true
        player_2 = true
        audioP1.play()
    } else if (player_2 === true) {
        bottom_mid.textContent = "O";
        bottom_mid.style.backgroundColor = "rgb(94, 94, 236)"
        player_1 = true
        bottom_M = false
        player_2 = false
        audioP2.play()
    }

    // All Bottoms
    if (bottom_L === isX && bottom_M === isX && bottom_R === isX) {

        finnished = true
        won = true

        let winTitle = document.createElement("h1");
        winTitle.setAttribute("id", "win-title");
        winTitle.textContent = "Player 1 won";
        document.body.appendChild(winTitle);

        setTimeout(() => {
            // Resets entire game
            location.reload()
        }, 3000);
        
    }

    if (bottom_L === isO && bottom_M === isO && bottom_R === isO) {

        finnished = true
        won = true
                                        
        let winTitle = document.createElement("h1");
        winTitle.setAttribute("id", "win-title");
        winTitle.textContent = "Player 2 won";
        winTitle.style.color = "rgb(94, 94, 236)";
        document.body.appendChild(winTitle);

        setTimeout(() => {
            // Resets entire game
            location.reload()
        }, 3000);
        
    }

    // All Mids (vertically)
    if (top_M === isX && mid_M === isX && bottom_M === isX) {
        
        finnished = true
        won = true
                                        
        let winTitle = document.createElement("h1");
        winTitle.setAttribute("id", "win-title");
        winTitle.textContent = "Player 1 won";
        document.body.appendChild(winTitle);

        setTimeout(() => {
            // Resets entire game
            location.reload()
        }, 3000);
        
    }

    if (top_M === isO && mid_M === isO && bottom_M === isO) {

        finnished = true
        won = true
                                        
        let winTitle = document.createElement("h1");
        winTitle.setAttribute("id", "win-title");
        winTitle.textContent = "Player 2 won";
        winTitle.style.color = "rgb(94, 94, 236)";
        document.body.appendChild(winTitle);

        setTimeout(() => {
            // Resets entire game
            location.reload()
        }, 3000);
        
    }

    // Draw
    if (counter === 9 && won === false) {

        finnished = true

        let winTitle = document.createElement("h1");
        winTitle.setAttribute("id", "win-title");
        winTitle.textContent = "Draw";
        winTitle.style.color = "white";
        document.body.appendChild(winTitle);

        setTimeout(() => {
            // Resets entire game
            location.reload()
        }, 3000);        

    }

    bottom_mid.removeEventListener("click", bottomMid)

})

bottom_right.addEventListener("click", function bottomRight() {

    if (finnished === true) {
        top_left.removeEventListener(bottomRight)
    }

    counter += 1

    if (player_1 === true) {
        bottom_right.textContent = "X";
        bottom_right.style.backgroundColor = "rgb(230, 90, 90)";
        player_1 = false
        bottom_R = true
        player_2 = true
        audioP1.play()
    } else if (player_2 === true) {
        bottom_right.textContent = "O";
        bottom_right.style.backgroundColor = "rgb(94, 94, 236)"
        player_1 = true
        bottom_R = false
        player_2 = false
        audioP2.play()
    }

    // All Bottoms
    if (bottom_L === isX && bottom_M === isX && bottom_R === isX) {

        finnished = true
        won = true
                                        
        let winTitle = document.createElement("h1");
        winTitle.setAttribute("id", "win-title");
        winTitle.textContent = "Player 1 won";
        document.body.appendChild(winTitle);

        setTimeout(() => {
            // Resets entire game
            location.reload()
        }, 3000);
        
    }

    if (bottom_L === isO && bottom_M === isO && bottom_R === isO) {

        finnished = true
        won = true
                                        
        let winTitle = document.createElement("h1");
        winTitle.setAttribute("id", "win-title");
        winTitle.textContent = "Player 2 won";
        winTitle.style.color = "rgb(94, 94, 236)";
        document.body.appendChild(winTitle);

        setTimeout(() => {
            // Resets entire game
            location.reload()
        }, 3000);
        
    }

    // All Rights
    if (top_R === isX && mid_R === isX && bottom_R === isX) {

        finnished = true
        won = true
                                        
        let winTitle = document.createElement("h1");
        winTitle.setAttribute("id", "win-title");
        winTitle.textContent = "Player 1 won";
        document.body.appendChild(winTitle);

        setTimeout(() => {
            // Resets entire game
            location.reload()
        }, 3000);
        
    }

    if (top_R === isO && mid_R === isO && bottom_R === isO) {

        finnished = true
        won = true
                                        
        let winTitle = document.createElement("h1");
        winTitle.setAttribute("id", "win-title");
        winTitle.textContent = "Player 2 won";
        winTitle.style.color = "rgb(94, 94, 236)";
        document.body.appendChild(winTitle);

        setTimeout(() => {
            // Resets entire game
            location.reload()
        }, 3000);
        
    }

    // Diagonal (Left)
    if (top_L === isX && mid_M === isX && bottom_R === isX) {
        
        finnished = true
        won = true

        let winTitle = document.createElement("h1");
        winTitle.setAttribute("id", "win-title");
        winTitle.textContent = "Player 1 won";
        document.body.appendChild(winTitle);

        setTimeout(() => {
            // Resets entire game
            location.reload()
        }, 3000);
        
    }

    if (top_L === isO && mid_M === isO && bottom_R === isO) {

        finnished = true
        won = true
                                        
        let winTitle = document.createElement("h1");
        winTitle.setAttribute("id", "win-title");
        winTitle.textContent = "Player 2 won";
        winTitle.style.color = "rgb(94, 94, 236)";
        document.body.appendChild(winTitle);

        setTimeout(() => {
            // Resets entire game
            location.reload()
        }, 3000);
        
    }

    // Draw
    if (counter === 9 && won === false) {

        finnished = true

        let winTitle = document.createElement("h1");
        winTitle.setAttribute("id", "win-title");
        winTitle.textContent = "Draw";
        winTitle.style.color = "white";
        document.body.appendChild(winTitle);

        setTimeout(() => {
            // Resets entire game
            location.reload()
        }, 3000);        

    }

    bottom_right.removeEventListener("click", bottomRight)

})