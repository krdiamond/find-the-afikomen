document.getElementById('28').addEventListener("click", function() {
    document.getElementById("text").style.display='block';
    document.getElementById("text").innerHTML = "<p>That would be too easy lol</p>"
  });

  document.getElementById('25').addEventListener("click", function() {
    document.getElementById("text").style.display='block';
    document.getElementById("text").innerHTML = "<p>Getting warmer...</p>"
  });

  document.getElementById('33').addEventListener("click", function() {
    document.getElementById("text").style.display='block';
    document.getElementById("text").innerHTML = "<p>I know anything could be true in the digital world but Matza is still too big to fit under a remote...</p>"
  });

  document.getElementById('37').addEventListener("click", function() {
    document.getElementById("text").style.display='block';
    document.getElementById("text").innerHTML = "<p>nope</p>"
  });

  document.getElementById('44').addEventListener("click", function() {
    document.getElementById("text").style.display='block';
    document.getElementById("matza").style.display='block';
    let time = new Date();
    let yourTime = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })

    document.getElementById("text").innerHTML = "<p>YOU FOUND IT!!!!!!!!!!!!!!!!!</p><p>" +yourTime+ "</p>";
  });





