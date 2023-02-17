const form = document.querySelector(".login-form");

form.addEventListener('submit',onFormSubmit);

const profile = {};


function onFormSubmit(event){
event.preventDefault();


  const email = event.currentTarget.elements.email;
  const password = event.currentTarget.elements.password;

    if (email.value === '' || password.value === '') {
    alert('всі поля повинні бути заповнені!');
  } else {
    profile.email = email.value;
    profile.password = password.value;

    console.log(profile);
  }
  event.currentTarget.reset();
}

