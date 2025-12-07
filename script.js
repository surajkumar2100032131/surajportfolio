//manu
function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}


//home
var typed = new Typed(".text", {
    strings: ["Programming" , "Web development" , "Customer communication"< "Relationship building"],
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

//certificate view

function openCertificate(url) {
    const modal = document.getElementById('certificateModal');
    const modalContent = document.getElementById('modalContent');


    document.getElementById('certificateFrame').src = url;

    modal.style.display = 'flex';
    setTimeout(() => {
        modal.classList.add('show');
        modalContent.classList.add('show');
    }, 10); 
}

function closeModal() {
    const modal = document.getElementById('certificateModal');
    const modalContent = document.getElementById('modalContent');


    modal.classList.remove('show');
    modalContent.classList.remove('show');

    setTimeout(() => {
        modal.style.display = 'none';
        document.getElementById('certificateFrame').src = ''; 
    }, 400); 
}

window.onclick = function(event) {
    const modal = document.getElementById('certificateModal');
    if (event.target === modal) {
        closeModal();
    }
};

// background canvas sparkling


const canvas = document.getElementById('sparkCanvas');
        const ctx = canvas.getContext('2d');

        function updateCanvasSize() {
            canvas.width = window.innerWidth;
            canvas.height = document.documentElement.scrollHeight; // Full scroll height
            particles = [];
            createParticles();
        }

        let particles = [];

        class Particle {
            constructor(x, y, size, speedX, speedY, opacity) {
                this.x = x;
                this.y = y;
                this.size = size;
                this.speedX = speedX;
                this.speedY = speedY;
                this.opacity = opacity;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                this.opacity -= 0.005;
                if (this.opacity <= 0) {
                    this.reset();
                }
            }

            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 3 + 1;
                this.speedX = (Math.random() - 0.5) * 1;
                this.speedY = (Math.random() - 0.5) * 1;
                this.opacity = Math.random() * 0.5 + 0.5;
            }

            draw() {
                ctx.globalAlpha = this.opacity;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = "skyblue";
                ctx.fill();
                ctx.globalAlpha = 1;
            }
        }

        function createParticles() {
            const totalParticles = Math.floor((canvas.width * canvas.height) / 5000); // Adjust density dynamically
            for (let i = 0; i < totalParticles; i++) {
                let x = Math.random() * canvas.width;
                let y = Math.random() * canvas.height;
                let size = Math.random() * 3 + 1;
                let speedX = (Math.random() - 0.5) * 1;
                let speedY = (Math.random() - 0.5) * 1;
                let opacity = Math.random() * 0.5 + 0.5;

                particles.push(new Particle(x, y, size, speedX, speedY, opacity));
            }
        }

        function animateParticles() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            requestAnimationFrame(animateParticles);
        }

        window.addEventListener("resize", updateCanvasSize);
        window.addEventListener("scroll", () => canvas.height = document.documentElement.scrollHeight);

        updateCanvasSize();
        animateParticles();

