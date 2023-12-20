let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";

  emailjs
  .sendForm(
    'service_lt1og9b',
    'template_ulsix04',
    event.target,
    'yiQK0OfNujiCgNnPB'
  ).then(() => {
    loading.classList.remove("modal__overlay--visible");
    success.classList += " modal__overlay--visible";
  }).catch(() => {
    loading.classList.remove("modal__overlay--visible");

    alert(
      "The email service is temporarily unavailable. Please contact me directly on victor.l.rodas14@gmail.com"
    );
  })

  setTimeout(() => {
  }, 1000)
}

function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
  }
  isModalOpen = true;
  document.body.classList += " modal--open";
}

function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList += " dark-theme"
  }
  else {
    document.body.classList.remove("dark-theme");
  }
}


function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape")
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;
  console.log(x, y);

  for (let i = 0; i < shapes.length; i++) {
    const isOdd = i % 2 !== 0
    const boolInt = isOdd? -1 : 1;
    shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px) rotate(${x * boolInt * 15}deg)`;
  }
}