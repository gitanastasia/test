


function init() {
       
    var showButton = document.getElementById('showBtn');
    showButton.onclick = creatAbbr;
    

 function creatAbbr() {
    var parts1 = ['c','i','u','c','p','a','q','s','e','d','i','r','p','r','l'];  
    var parts2 = ['c','i','u','c','p','a','q','s','e','d','i','r','p','r','l'];
    var parts3 = ['c','i','u','c','p','a','q','s','e','d','i','r','p','r','l'];
    
        
    //var rand1 = Math.floor(Math.random() * parts1.length);
    //var rand2 = Math.floor(Math.random() * parts2.length);
    //var rand3 = Math.floor(Math.random() * parts3.length);
    
    //var word = parts1[rand1] + parts2[rand2] + parts3[rand3];
    
    //Replaced the above mentioned code
    var pickRandomPart = function(parts) {
      return parts[Math.floor(Math.random() * parts.length)];  
    };
    
    var randomWord = pickRandomPart(parts1) + pickRandomPart(parts2) + pickRandomPart(parts3);
    //return randomWord;
    
    alert("Here you are! => " + randomWord);
    
  }
};
window.onload = init;


