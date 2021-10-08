const input = document.querySelector("input");
const form = document.getElementById("mailForm");

let email = "";

const emailChecker = (value) => {

    if(!value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
        
        document.querySelector("input").classList.add("error");
        document.querySelector("form > p").classList.remove ("hidden");
        email = null;
        
    } else {
        
        document.querySelector("input").classList.remove("error");
        document.querySelector("form > p").classList.add("hidden");
        email = value;
    };
};

input.addEventListener('input', (e) => {
    email = e.target.value;
    console.log(email);
});

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    emailChecker(email);
});