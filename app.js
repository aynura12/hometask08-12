const Name = document.querySelector(".name");
const surname = document.querySelector(".surname");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const age = document.querySelector(".age");
const sumbit = document.querySelector("#sumbit");
const span1 = document.querySelector("#span1");
const span2 = document.querySelector("#span2");
const span3 = document.querySelector("#span3");
const span4 = document.querySelector("#span4");
const span5 = document.querySelector("#span5");
const icon = document.querySelector(".fa-eye");
const array=[];

const obj={
    name:Name.value,
    surname:surname.value,
    email:email.value,
    password:password.value,
    age:age.value
}
array.push(obj)
localStorage.setItem("array",JSON.stringify(array))

Name.addEventListener("keyup", (e) => {
    namefunc(e.target.value);
});
surname.addEventListener("keyup", (e) => {
    surnamefunc(e.target.value);
});
email.addEventListener("keyup", (e) => {
    emailfunc(e.target.value);
});
password.addEventListener("keyup", (e) => {
    passfunc(e.target.value);
});
age.addEventListener("keyup", (e) => {
    agefunc(e.target.value);
});


if (password.type = "password") {
    icon.addEventListener("click", () => {
        password.type = "text"
    })
}

function namefunc(username) {
    if (username.trim() == "") {
        span1.innerText = "Invalid Input!";
        return false;
    }
    else {
        span1.innerText = "";
        return true;
    }
}
function surnamefunc(usersurname) {
    if (usersurname.trim() == "") {
        span2.innerText = "Invalid Input!";
        return false;
    }
    else {
        span2.innerText = "";
        return true;
    }
}
function emailfunc(useremail) {
    if (useremail.trim() == "") {
        span3.innerText = "Invalid Input!";
        return false;
    }
    else {
        span3.innerText = "";
        return true;
    }
}
function passfunc(userpass) {
    if (userpass.trim() == "") {
        span4.innerText = "Invalid Input!";
        return false;
    }
    else {
        span4.innerText = "";
        return true;
    }
}
function agefunc(userage) {
    if (userage.trim() == "") {
        span5.innerText = "Invalid Input!";
        return false;
    }
    else {
        span5.innerText = "";
        return true;
    }
}
