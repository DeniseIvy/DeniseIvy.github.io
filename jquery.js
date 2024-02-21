$(document).ready(function(){

    // Payment list
    $("#upiqr").click(function(){
        $("#modal").css({"transform":"translateY(0px)"});
        $("#modalbg").css({"display":"block"});
        $(".ibts1").css({"display":"none"});
        $(".upiqr1").css({"display":"block"});
        $(".upiapp1").css({"display":"none"});
        $("#cbtn").css({"display":"none"});
        $("#amt").css({"border-top": "0.75px solid #e4e4e4"});
        $("#amt").removeClass("shad-t");
    });

    $("#ibt").click(function(){
        $("#modal").css({"transform":"translateY(0px)"});
        $("#modalbg").css({"display":"block"});
        $(".ibts1").css({"display":"block"});
        $(".upiqr1").css({"display":"none"});
        $(".upiapp1").css({"display":"none"});
        $("#cbtn").css({"display":"none"});
        $("#amt").css({"border-top": "0.75px solid #e4e4e4"});
        $("#amt").removeClass("shad-t");
    });

    $("#upiapp").click(function(){
        $("#modal").css({"transform":"translateY(0px)"});
        $("#modalbg").css({"display":"block"});
        $(".ibts1").css({"display":"none"});
        $(".upiqr1").css({"display":"none"});
        $(".upiapp1").css({"display":"block"});
        $("#cbtn").css({"display":"none"});
        $("#amt").css({"border-top": "0.75px solid #e4e4e4"});
        $("#amt").removeClass("shad-t");
    });

    $("#cncl").click(function() {
        $("#modalbg").css({"display":"block"});
        $("#modalcancel").css({"display":"block"});
    });

    $("#modalbg").click(function() {
        $("#modalbg").css({ "display":"none"});
        $("#modalcancel").css({"display":"none"});
    })

});

$(function(){

    var selectedBank = null;

    $(".bitem").click(function(){
      
        $(".bitem").css({
            "font-weight":"400",
            "border-color":"#e4e4e4",
            "border-width":"0.75px",
        });
        $(this).css({
            "font-weight":"700",
            "border-color":"#00B451",
            "border-width":"0.75px",
        });
        selectedBank = $(this).find("a[href]").attr('href').replace('#', '');
        $("#sbmt").prop("disabled", false);

    });

    $("#fsbmt1").submit(function() {
        $("#ibtinfo").removeClass("disabled");
        $(".bnkselected").html(selectedBank);
        $("#fsbmt1").attr("id", "fsbmt2");
        $("#sbmt").removeClass("enabled");
        $("#sbmt").addClass("disabled");

        var bSel = $("#selbank").text();
        console.log(bSel);

        if ($("#selbank").text() == "Axis Bank") {
            $("#absbmt").addClass("enabled"); 
            $("#absbmt").removeClass("disabled");
        } else if ($("#selbank").text() == "Kotak Mahindra") {
            $("#kmsbmt").addClass("enabled");
            $("#kmsbmt").removeClass("disabled");
        } else if ($("#selbank").text() == "SBI") {
            $("#sbsbmt").addClass("enabled");
            $("#sbsbmt").removeClass("disabled");
        } else if ($("#selbank").text() == "IDBI Bank") {
            $("#idsbmt").addClass("enabled");
            $("#idsbmt").removeClass("disabled");
        } else if ($("#selbank").text() == "HDFC Bank") {
            $("#hdsbmt").addClass("enabled");
            $("#hdsbmt").removeClass("disabled");
        } else if ($("#selbank").text() == "Punjab National Bank") {
            $("#pnsbmt").addClass("enabled");
            $("#pnsbmt").removeClass("disabled");
        } else if ($("#selbank").text() == "ICICI Bank") {
            $("#icsbmt").addClass("enabled");
            $("#icsbmt").removeClass("disabled");
        }

        event.preventDefault();
    });



    $("#btnchange").click(function() {
        var sb1 = null;
        $("#ibtinfo").addClass("disabled");
        $("#sbmt").removeClass("disabled");
        $("#sbmt").addClass("enabled");
        $("#absbmt").removeClass("enabled");
        $("#absbmt").addClass("disabled");
        $("#kmsbmt").removeClass("enabled");
        $("#kmsbmt").addClass("disabled");  
        $("#sbsbmt").removeClass("enabled");
        $("#sbsbmt").addClass("disabled");
        $("#idsbmt").removeClass("enabled");
        $("#idsbmt").addClass("disabled"); 
        $("#hdsbmt").removeClass("enabled");
        $("#hdsbmt").addClass("disabled");  
        $("#pnsbmt").removeClass("enabled");
        $("#pnsbmt").addClass("disabled");    
        $("#icsbmt").removeClass("enabled");
        $("#icsbmt").addClass("disabled");      
    });


});







