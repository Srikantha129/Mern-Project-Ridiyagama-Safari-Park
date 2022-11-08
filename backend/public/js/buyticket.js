function myFunction() {
    var adult = document.getElementById("Adults").value;
    var children = document.getElementById("Children").value;
    
    var type = document.querySelector('input[name = "type"]:checked').value;
    var typetest = (parseInt(type, 10));
    var total;
    var adultt;
    var childrent;
    var fap = parseInt("<%= fa %>");
    var fcp = parseInt("<%= fc %>");
    var lap = parseInt("<%= la %>");
    var lcp = parseInt("<%= lc %>");
    console.log(fap);

    if (typetest === 0) {
        
        adultt = adult * lap;
        childrent = children * lcp;
        total = adultt + childrent;
        alert("Your total price is " + total   );
    }
    else if (type == 1 ){
        
        adultt = adult * fap ;
        childrent = children * fcp;
        total = adultt + childrent;
        alert("Your total price is " + total );
    
     }
     
    }