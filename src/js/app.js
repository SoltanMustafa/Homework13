window.onload = function(){
    setTimeout(
        function(){
            window.location.href ="https://www.youtube.com";
        }, 5000 );
    
    let dots = document.querySelectorAll(".loading-text .dot");
    let dot_interval = 1570;
    let dot_currentIndex = 0;

    function showNextDot(){
        if(dot_currentIndex < dots.length){
            dots[dot_currentIndex].style.opacity = 1;
            dot_currentIndex++;
            setTimeout(showNextDot, dot_interval);
        }
    }

    showNextDot();
    

    let squares = document.querySelectorAll(".loading-square");
    let interval = 500;
    let currentIndex = 0;

    function showNextSquare(){
        if(currentIndex < squares.length){
            squares[currentIndex].style.opacity = 1;
            currentIndex++;
            setTimeout(showNextSquare, interval);
        }
    }
    showNextSquare();
}

