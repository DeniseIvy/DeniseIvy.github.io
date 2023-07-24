const texts = [
    "Developer",
    "Gamer",
    "Teacher",
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
  
    setTimeout(type, 500); 
  }
  
  
  document.addEventListener("DOMContentLoaded", type);
  