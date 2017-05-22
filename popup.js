function checkLogin() {
  if("packtoken" in localStorage){
    console.log('Logged In');
    window.location = "loggedin.html";
  } else {
    console.log('Not Logged In');
  }
}

window.onload = checkLogin;

document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('checkPage');
  checkPageButton.addEventListener('click', function() {

    var gettingActiveTab = browser.tabs.query({active: true, currentWindow: true});
    gettingActiveTab.then((tabs) => {

      var data = new FormData();
      data.append('username', document.getElementById("username").value);
      data.append('password', document.getElementById("password").value);

      var xhr = new XMLHttpRequest();
      xhr.open('POST', 'https://nameless-lowlands-50285.herokuapp.com/api/article/login/', true);
      xhr.onload = function () {
        if(JSON.parse(this.responseText).success) {
          localStorage.setItem('packtoken','Token '+JSON.parse(this.responseText).token);
          localStorage.setItem('packname',JSON.parse(this.responseText).name);
          // console.log('RESPONSE: ',this.responseText);
          window.location = "loggedin.html";
        } else {
          // console.log('RESPONSE: ',this.responseText);
          document.getElementById("errMsg").innerHTML = 'Unable to login. <br>Check your credentials.';
        }
      };
      xhr.send(data);



    });

  }, false);
}, false);
