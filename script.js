//manu
function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}


//home
var typed = new Typed(".text", {
    strings: ["Programming" , "Cybersecurity" , "Web development"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

//educations
const containers = document.querySelectorAll('.container');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

containers.forEach(container => {
    observer.observe(container);
});



const containers1 = document.querySelectorAll('.container1');

const observers = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

containers1.forEach(container => {
    observers.observe(container);
});
//project timeline
$(".hover").mouseleave(
    function() {
      $(this).removeClass("hover");
    }
  );

//Experiences timeline

document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.experience-item');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    });

    items.forEach(item => {
        observer.observe(item);
    });
});

//certificates

function openCertificate(url) {
    window.open(url, '_blank');
}

// contact us

// function sendMail() {
//     var params = {
//         name: document.getElementById("name").value,
//         email: document.getElementById("email").value,
//         message: document.getElementById("message").value,
//     };
//     const serviceID = "service_6d4wsu7";
//     const templateID = "template_w047wkj";
//     const emailField = document.getElementById("email");
//     const email = emailField.value;
//     const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

//     // Function to show custom alert
//     function showAlert(message) {
//         var modal = document.getElementById("customAlert");
//         var alertMessage = document.getElementById("alertMessage");
//         var closeButton = document.getElementById("closeButton");

//         alertMessage.textContent = message;
//         modal.style.display = "flex";

//         closeButton.onclick = function() {
//             modal.style.display = "none";
//         };

//         window.onclick = function(event) {
//             if (event.target == modal) {
//                 modal.style.display = "none";
//             }
//         };
//     }

//     if (!emailPattern.test(email)) {
//         showAlert("Your email is not correct");
//         return false;
//     }

//     emailjs.send(serviceID, templateID, params)
//         .then(
//             res => {
//                 document.getElementById("name").value = "";
//                 document.getElementById("email").value = "";
//                 document.getElementById("message").value = "";
//                 console.log(res);
//                 showAlert("Your message was sent successfully!");
//             }
//         )
//         .catch(err => {
//             console.error(err);
//             showAlert("There was an error sending your message. Please try again.");
//         });

//     return true;
// }

// project

function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };
    const serviceID = "service_6d4wsu7";
    const templateID = "template_w047wkj";
    const emailField = document.getElementById("email");
    const email = emailField.value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Function to show custom alert
    function showAlert(message) {
        var modal = document.getElementById("customAlert");
        var alertMessage = document.getElementById("alertMessage");
        var closeButton = document.getElementById("closeButton");

        alertMessage.textContent = message;
        modal.style.display = "flex";

        closeButton.onclick = function() {
            modal.style.display = "none";
        };

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        };
    }

    if (!emailPattern.test(email)) {
        showAlert("Your email is incorrect!");
        return false;
    }

    // Show the spinner
    document.getElementById("spinner").style.display = "flex";

    emailjs.send(serviceID, templateID, params)
        .then(
            res => {
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("message").value = "";
                console.log(res);
                showAlert("message sent successfully!");
                // Hide the spinner
                document.getElementById("spinner").style.display = "none";
            }
        )
        .catch(err => {
            console.error(err);
            showAlert("There was an error sending your message. Please try again.");
            // Hide the spinner
            document.getElementById("spinner").style.display = "none";
        });

    return true;
}

