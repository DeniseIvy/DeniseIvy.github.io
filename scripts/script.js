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
  