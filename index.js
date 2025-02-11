document.getElementById("openModal").addEventListener("click", function() {

    document.getElementById("modal").style.display = "block";

});

document.getElementById("closeModal").addEventListener("click", function() {

    document.getElementById("modal").style.display = "none";

});

// For  block 01

document.getElementById("openModal1").addEventListener("click", function() {

    document.getElementById("modal1").style.display = "block";

});

document.getElementById("closeModal1").addEventListener("click", function() {

    document.getElementById("modal1").style.display = "none";

});

// For  block 02

document.getElementById("openModal2").addEventListener("click", function() {

    document.getElementById("modal2").style.display = "block";

});

document.getElementById("closeModal2").addEventListener("click", function() {

    document.getElementById("modal2").style.display = "none";

});

// For  block 03

document.getElementById("openModal3").addEventListener("click", function() {

    document.getElementById("modal3").style.display = "block";

});

document.getElementById("closeModal3").addEventListener("click", function() {

    document.getElementById("modal3").style.display = "none";

});

// For  block 04

document.getElementById("openModal4").addEventListener("click", function() {

    document.getElementById("modal4").style.display = "block";

});

document.getElementById("closeModal4").addEventListener("click", function() {

    document.getElementById("modal4").style.display = "none";

});

// For  block 05

document.getElementById("openModal5").addEventListener("click", function() {

    document.getElementById("modal5").style.display = "block";

});

document.getElementById("closeModal5").addEventListener("click", function() {

    document.getElementById("modal5").style.display = "none";

});

// For  block 06

document.getElementById("openModal6").addEventListener("click", function() {

    document.getElementById("modal6").style.display = "block";

});

document.getElementById("closeModal6").addEventListener("click", function() {

    document.getElementById("modal6").style.display = "none";

});


// Close when clicking outside modal

window.onclick = function(event) {

    let modal = document.getElementById("modal");

    if (event.target === modal) {

        modal.style.display = "none";

    }

};