//IIFE
(function(){
//code
  //  console.info("I was called");

    var pricePounds;
    var exchangeRate = 0.87;
    var priceEuros = 0;

    var convertForm = document.getElementById("myForm");
    var msg = document.getElementById("msg");

    convertForm.addEventListener("submit", function(ev){
        console.dir(ev)
        ev.preventDefault()
        //console.info("form submitted")
        pricePounds = parseFloat(document.getElementById("pounds").value);
        console.info(pricePounds)
        if(isNaN(pricePounds)){
            msg.innerHTML = "Must be a number"
            msg.setAttribute("class","error")
        } else {
            msg.removeAttribute("class")
            priceEuros = pricePounds * exchangeRate;
            priceEuros = priceEuros.toFixed(2)
            msg.innerHTML = `&euro; ${priceEuros}`
        }

    })

    document.getElementById("pounds").addEventListener("focus", function(ev){
    ev.target.value = ""
    })

})();