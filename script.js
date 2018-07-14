function einsteinHomePg(){ 
    let requestInfo = new XMLHttpRequest();
    requestInfo.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
          let myInfo = JSON.parse(this.responseText);
          document.getElementById("einsteinId").innerHTML = myInfo.name;
          document.getElementById("age").innerHTML = myInfo.birthday;
          let photo = document.getElementById("pic")
          photo.setAttribute("src",myInfo.picture)
      }
      };
      
    requestInfo.open("GET", "einstein.json", true);
    requestInfo.send();
    }
einsteinHomePg();


    function einstein() {
        let requestBio = new XMLHttpRequest();
        requestBio.onreadystatechange = function() {
           if (this.readyState == 4 && this.status == 200) {
             let myInfo = JSON.parse(this.responseText);
             document.getElementById("einsteinBio").innerHTML = myInfo.aboutMe
         }
        
        };
        requestBio.open("GET", "einstein.json", true);
        requestBio.send();
    }  
    

