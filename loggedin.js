function loadData() {
  if("packname" in localStorage){
    document.getElementById("greeting").innerHTML = 'Hey '+localStorage.packname +"!";
  } else {
    console.log('Not Logged In');
    window.location = "popup.html";
  }
}

window.onload = loadData;

document.addEventListener('DOMContentLoaded', function() {

  var SubmitButton = document.getElementById('submit');
  var LogOutButton = document.getElementById('logout');

  SubmitButton.addEventListener('click', function() {

    browser.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
        var url = tabs[0].url;

        var data = new FormData();
        data.append('source', url);
        console.log('source: ',url);
        console.log("Authorization", localStorage.packtoken);

        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://nameless-lowlands-50285.herokuapp.com/api/article/create/', true);
        xhr.setRequestHeader("Authorization", localStorage.packtoken);
        xhr.onload = function () {
          if(JSON.parse(this.responseText).source) {
            document.getElementById("detail").innerHTML = 'Successfully added to your bucket.';
            document.getElementById("submit").disabled = true;
            document.getElementById("submit").innerHTML = 'Added';
          } else {
            // TODO: Handle error gracefully and show solution.
            localStorage.removeItem('packtoken');
            localStorage.removeItem('packname');
            window.location = "popup.html";
          }
        };
        xhr.send(data);



    });

  }, false);

  LogOutButton.addEventListener('click', function() {

    localStorage.removeItem('packtoken');
    localStorage.removeItem('packname');
    window.location = "popup.html";

  }, false);

}, false);
