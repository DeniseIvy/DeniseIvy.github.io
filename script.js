function ibtfunction1(){
    document.getElementById("ibt").style.borderWidth = "1.5px";
    document.getElementById("ibt").style.borderColor = "#00B451";
    document.getElementById("ibt").style.transition = "0.5s ease";
    document.getElementById("upiqr").style.borderWidth = "0.75px";
    document.getElementById("upiqr").style.borderColor = "#E4E4E4";
    document.getElementById("upiqr").style.transition = "0.5s ease";
    document.getElementById("upiapp").style.borderWidth = "0.75px";
    document.getElementById("upiapp").style.borderColor = "#E4E4E4";
    document.getElementById("upiapp").style.transition = "0.5s ease";
}

function upifunction1(){
    document.getElementById("ibt").style.borderWidth = "0.75px";
    document.getElementById("ibt").style.borderColor = "#E4E4E4";
    document.getElementById("ibt").style.transition = "0.5s ease";
    document.getElementById("upiqr").style.borderWidth = "1.5px";
    document.getElementById("upiqr").style.borderColor = "#00B451";
    document.getElementById("upiqr").style.transition = "0.5s ease";
    document.getElementById("upiapp").style.borderWidth = "0.75px";
    document.getElementById("upiapp").style.borderColor = "#E4E4E4";
    document.getElementById("upiapp").style.transition = "0.5s ease";
}

function upifunction2(){
    document.getElementById("ibt").style.borderWidth = "0.75px";
    document.getElementById("ibt").style.borderColor = "#E4E4E4";
    document.getElementById("ibt").style.transition = "0.5s ease";
    document.getElementById("upiqr").style.borderWidth = "0.75px";
    document.getElementById("upiqr").style.borderColor = "#E4E4E4";
    document.getElementById("upiqr").style.transition = "0.5s ease";
    document.getElementById("upiapp").style.borderWidth = "1.5px";
    document.getElementById("upiapp").style.borderColor = "#00B451";
    document.getElementById("upiapp").style.transition = "0.5s ease";
}

function mbgfunction1(){
    document.getElementById("modal").style.transform = "translateY(450px)";
    document.getElementById("modalbg").style.display = "none";
    document.getElementById("clsemodal").style.display = "none";
    document.getElementById("clsemodal").style.zIndex = "-1";
    document.getElementById("wrpclose").style.zIndex = "-1";
    document.getElementById("modalbg").style.zIndex = "5";
    document.getElementById("sbmt").disabled = true;
    document.getElementById("cbtn").style.display ="block";
    document.getElementById("ibt").style.borderWidth = "0.75px";
    document.getElementById("ibt").style.borderColor = "#E4E4E4";
    document.getElementById("ibt").style.transition = "0.5s ease";
    document.getElementById("upiqr").style.borderWidth = "0.75px";
    document.getElementById("upiqr").style.borderColor = "#E4E4E4";
    document.getElementById("upiqr").style.transition = "0.5s ease";
    document.getElementById("upiapp").style.borderWidth = "0.75px";
    document.getElementById("upiapp").style.borderColor = "#E4E4E4";
    document.getElementById("upiapp").style.transition = "0.5s ease";
    document.getElementById("amt").classList.add("shad-t");
    document.getElementById("ibtinfo").classList.add("disabled");
    document.getElementById("amt").style.borderTop = "none";
}

function closeibtfunction(){
    document.getElementById("modal").style.transform = "translateY(450px)";
    document.getElementById("modalbg").style.display = "none";
    document.getElementById("clsemodal").style.display = "none";
    document.getElementById("clsemodal").style.zIndex = "-1";
    document.getElementById("wrpclose").style.zIndex = "-1";
    document.getElementById("modalbg").style.zIndex = "5";
    document.getElementById("sbmt").disabled = true;
    document.getElementById("cbtn").style.display ="block";
    document.getElementById("ibt").style.borderWidth = "0.75px";
    document.getElementById("ibt").style.borderColor = "#E4E4E4";
    document.getElementById("ibt").style.transition = "0.5s ease";
    document.getElementById("upiqr").style.borderWidth = "0.75px";
    document.getElementById("upiqr").style.borderColor = "#E4E4E4";
    document.getElementById("upiqr").style.transition = "0.5s ease";
    document.getElementById("upiapp").style.borderWidth = "0.75px";
    document.getElementById("upiapp").style.borderColor = "#E4E4E4";
    document.getElementById("upiapp").style.transition = "0.5s ease";
    document.getElementById("amt").classList.add("shad-t");
    document.getElementById("ibtinfo").classList.add("disabled");
    document.getElementById("amt").style.borderTop = "none";
}

$("#absbmt").click(function() {
    window.location.href = "./axisbank.html";
});

$("#kmsbmt").click(function() {
    window.location.href = "./kotak.html";
});

$("#sbsbmt").click(function() {
    window.location.href = "./sbi.html";
});

$("#idsbmt").click(function() {
    window.location.href = "./idbi.html";
});

$("#hdsbmt").click(function() {
    window.location.href = "./hdfc.html";
});

$("#pnsbmt").click(function() {
    window.location.href = "./pnb.html";
});

$("#icsbmt").click(function() {
    window.location.href = "./icici.html";
});

$("#cbtn").click(function(){
    $("#modalbg").css({"display":"block"});
    $("#modalbg").css({"z-index":"15"});
    $(".wrappera").css({"z-index":"99"});
    $("#clsemodal").css({"display":"flex"});
});

$("#cancel").click(function(){
    window.location.href = "https://www.google.com.ph/search?q=Goodbye&hl=en&authuser=0&tbm=isch&source=hp&biw=2560&bih=979&ei=S0vPY7TeN4ei2roPipiM2AM&iflsig=AK50M_UAAAAAY89ZW5FPz-ICYloOEt6p9GXVmp6lH7xC&ved=0ahUKEwj0r7z1nN_8AhUHkVYBHQoMAzsQ4dUDCAc&uact=5&oq=Goodbye&gs_lcp=CgNpbWcQAzIICAAQgAQQsQMyCAgAEIAEELEDMggIABCABBCxAzIICAAQgAQQsQMyBAgAEAMyCAgAEIAEELEDMgUIABCABDIFCAAQgAQyBQgAEIAEMgsIABCABBCxAxCDAVCGA1jGFWDGFmgFcAB4AIABWIgB5AWSAQIxMZgBAKABAaoBC2d3cy13aXotaW1nsAEA&sclient=img";

})