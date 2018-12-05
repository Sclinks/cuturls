
      var elem = document.getElementById("linkShorted");
      if(elem != null){

        var cdaud = new Audio();
        cdaud.src = "https://raw.githubusercontent.com/Sclinks/cuturls/master/SclinksTimer.mp3";

        var timeLeft = 15;
        var url = elem.getAttribute("href");

        elem.removeAttribute("href");

        elem.innerHTML = "<span class='icon-spin4 animate-spin'/><span id='Timer'/>";

        var infoPost = document.getElementById("sclink");

        infoPost.setAttribute("style","background: transparent url("+infoPost.getAttribute("alt")+") no-repeat scroll center center / cover;")

        infoPost.removeAttribute("alt");

        var timerId = setInterval(countdown, 1000);

      }

      function countdown() {
        if(timeLeft <= 10)
        {
          cdaud.play();
          if (timeLeft == 0) {
            clearTimeout(timerId);
            getLink();
          } else {
            document.getElementById("Timer").innerHTML = timeLeft+"s";
            timeLeft--;
          }
        }
        else{timeLeft--;}
      }

      function getLink() {
        elem.setAttribute("href",url);
        elem.innerHTML = "<span class='icon-right-hand'/> Get Link <span class='icon-link'/>";
      }
