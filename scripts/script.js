const texts = [
    "Developer",
    "Gamer",
    "Teacher",
    "Idol ni Naela",
  ]; 
  
  let textIndex = 0;
  let charIndex = 0;
  const typingEffect = document.getElementById("type");
  
  function type() {
    const currentText = texts[textIndex].slice(0, charIndex++);
    typingEffect.textContent = currentText;
  
    if (charIndex > texts[textIndex].length) {
      
      textIndex = (textIndex + 1) % texts.length;
      charIndex = 0;
    }
  
    setTimeout(type, 150); 
  }
  
  
document.addEventListener("DOMContentLoaded", type);

document.addEventListener("DOMContentLoaded", function() {
    const myButton = document.getElementById("btnCntct");
  
    const linkToOpen = "./includes/contact.html";
  
    myButton.addEventListener("click", function() {
      window.location.href = linkToOpen;
    });
});

var modal = document.getElementById("cancelModal");
var btn = document.getElementById("btnCancel");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
  