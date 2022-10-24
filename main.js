const buttonClick = document.getElementById('button');

//fetch the data from the API//
async function getRandomUser() {
  const response = await fetch('https://randomuser.me/api/');
  //convert the data into JSON//
  const data = await response.json();
  const user = data.results[0];
  displayUser(user);
}
function displayUser(user) {
  const name = document.getElementById('name');
  const gender = document.getElementById('gender');
  const email = document.getElementById('email');
  const phone = document.getElementById('phone');
  const country = document.getElementById('country');
  const image = document.getElementById('image');
  const time = document.getElementById('time-zone');

  //Get access to the data and display//
  name.innerText = `${user.name.title} ${user.name.first} ${user.name.last}`;

  gender.innerText = `${user.gender}`;

  email.innerText = `${user.email}`;

  phone.innerText = `${user.phone}`;

  country.innerText = `${user.location.country}`;

  image.setAttribute('src', `${user.picture.large}`);

  time.innerText = `${user.timezone.offset}`;
}
//make the button clickable//
button.onclick = function () {
  getRandomUser();
};

getRandomUser();
