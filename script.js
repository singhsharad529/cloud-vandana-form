var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

function setModalValue() {
    document.getElementById("modal-name").innerHTML = document.getElementById("name").value;
    document.getElementById("modal-email").innerHTML = document.getElementById("email").value;

    let question1 = "No";
    if (document.getElementById("q1-yes").checked) {
        question1 = "Yes";
    }

    let question2 = "No";
    if (document.getElementById("q2-yes").checked) {
        question2 = "Yes";
    }

    let question3 = "Unsatified";
    if (document.getElementById("q3-satisfied").checked) {
        question3 = "Satisfied";
    }
    if (document.getElementById("q3-undecided").checked) {
        question3 = "Undecided";
    }


    document.getElementById("modal-q1").innerHTML = question1;
    document.getElementById("modal-q2").innerHTML = question2;
    document.getElementById("modal-q3").innerHTML = question3;

    document.getElementById("modal-q4").innerHTML = document.getElementById("q4").value;

}

function openModal() {
    modal.style.display = "block";
}

function submitFun(e) {
    e.preventDefault();

    //validation of inputs
    let name = document.getElementById("name").value;
    if (name == "") {
        alert("Please Enter your Name")
        return false;
    }

    let email = document.getElementById("email").value;
    if (email == "") {
        alert("Please Enter your Email")
        return false;
    }

    let q4 = document.getElementById("q4").value;
    if (q4 == "") {
        alert("Please Enter your Suggestion")
        return false;
    }

    //putting values into modal
    setModalValue();

    //open modal
    openModal();

    return true;
}



// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
    let myForm = document.getElementById("customerForm");
    myForm.reset();
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        let myForm = document.getElementById("customerForm");
        myForm.reset();
    }
}