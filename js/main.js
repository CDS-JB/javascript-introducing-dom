  //alert('Bananarama');
  //console.info("Bananarama")
  //console.dir(document)
document.getElementById("myHeading").innerHTML = "Josh's Web Site"

document.querySelector("a").setAttribute("href","http://www.google.co.uk")

document.querySelector("nav ul lu").setAttribute("class", "currentPage")

document.getElementById("myTestEvent").addEventListener("click", function(){
    console.info("I was clicked - ouch")
    document.getElementById("myHeading").innerHTML = "Josh's Site";
})