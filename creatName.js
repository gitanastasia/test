


function init() {
       
    var showButton = document.getElementById('showBtn');
    showButton.onclick = creatWord;
    

 function creatWord() {
    var parts1 = ['па','по','ло','мы','кар','пу','та','ля','ко','ма','ам','ры','ба','со','зы'];  
    var parts2 = ['па','по','ло','мы','кар','пу','та','ля','ко','ма','ам','ры','ба','со','зы']; 
    var parts3 = ['па','по','ло','мы','кар','пу','та','ля','ко','ма','ам','ры','ба','со','зы']; 
    
        
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
    
    alert("Вот оно! => " + randomWord);
    
  }
};
window.onload = init;


