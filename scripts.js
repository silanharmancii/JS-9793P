// Get the button
var btn = document.getElementById("myBtn");

var toplam = 0;

function myFunction(){
    btn.innerHTML=toplam +1;
    toplam++;

    document.getElementById("text-center").innerHTML= toplam + "<em> kere dikkatiniz dağıldı.</em> "

}
// Pause and play the video, and change the button text
