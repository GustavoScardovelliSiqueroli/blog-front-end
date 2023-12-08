
let objeto = JSON;
let user = JSON

async function send() {
  const name = document.querySelector("#id1");
  const email = document.querySelector("#id2");
  const pwd = document.querySelector("#id3");
  const phone = document.querySelector("#id4");
  
  let url = "http://localhost:5000/user/register";
  console.log(objeto);
  objeto.name = name.value;
  objeto.email = email.value;
  objeto.pwd = pwd.value;
  objeto.phone = phone.value;

  await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(objeto)
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      window.alert(data.message)
    })
    .catch(err => console.error(err))
}

async function login() {
  const email = document.querySelector("#id2");
  const pwd = document.querySelector("#id3");
  
  let url = "http://localhost:5000/user/login";
  console.log(objeto);
  objeto.email = email.value;
  objeto.pwd = pwd.value;

  await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(objeto)
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      window.alert(data.message);
      user = data;
      testeelement = document.createElement('testeelement');
    })
    .catch(err => console.error(err));
}

function teste(){
  console.log(user);
}