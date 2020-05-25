    func();
    var seconds = 5 /*SECONDS, UPDATE INTERVAL*/;
    setInterval(function(){
        func();
    }, seconds * 1000);
    function func(){
        var ip = "concordia.mcserver.us";
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "https://eu.mc-api.net/v3/server/info/" + ip, true);
        xhr.onreadystatechange = function() {
                if (xhr.readyState == 4) {
                        data = JSON.parse(xhr.responseText);
                        if (data.cache.status) {
                                document.getElementById("bar").innerHTML=data.players.online + "/" + data.players.max;
                                document.getElementById("bar").style.width = Math.round(100*(data.players.online/data.players.max)) + "%";
                        } else {
                                document.getElementById("bar").innerHTML="Offline";
                        }
                }
        }
        xhr.send();
    }
    





