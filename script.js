document.getElementById('12').addEventListener("click", function() {
    document.getElementById("text").style.display='block';
    document.getElementById("text").innerHTML = "<p>Very cold... brrr</p>"
  });

document.getElementById('28').addEventListener("click", function() {
    document.getElementById("text").style.display='block';
    document.getElementById("text").innerHTML = "<p>That would be too easy lol</p>"
  });

  document.getElementById('20').addEventListener("click", function() {
    document.getElementById("text").style.display='block';
    document.getElementById("text").innerHTML = "<p>Getting warmer... </p>"
  });
  
  document.getElementById('23').addEventListener("click", function() {
    document.getElementById("text").style.display='block';
    document.getElementById("text").innerHTML = "<p> Not in here </p>"
  });

  document.getElementById('30').addEventListener("click", function() {
    document.getElementById("text").style.display='block';
    document.getElementById("text").innerHTML = "<p> Not in here </p>"
  });

  document.getElementById('42').addEventListener("click", function() {
    document.getElementById("text").style.display='block';
    document.getElementById("text").innerHTML = "<p>nothings here </p>"
  });

  document.getElementById('22').addEventListener("click", function() {
    document.getElementById("text").style.display='block';
    document.getElementById("text").innerHTML = "<p>That would be too easy lol</p>"
  });

  document.getElementById('25').addEventListener("click", function() {
    document.getElementById("text").style.display='block';
    document.getElementById("text").innerHTML = "<p>hot hot hot  !</p>"
  });

  document.getElementById('33').addEventListener("click", function() {
    document.getElementById("text").style.display='block';
    document.getElementById("text").innerHTML = "<p> Matzo is too big to fit under a remote...</p>"
  });

  document.getElementById('37').addEventListener("click", function() {
    document.getElementById("text").style.display='block';
    document.getElementById("text").innerHTML = "<p>nope</p>"
  });

  document.getElementById('38').addEventListener("click", function() {
    document.getElementById("text").style.display='block';
    document.getElementById("matzo").style.display='block';
    let time = new Date();
    let yourTime = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })

    document.getElementById("text").innerHTML = "<p>YOU FOUND THE AFIKOMEN !!!!!!!!!!!!!!!!!</p><p>" +yourTime+ "</p>";
  });





