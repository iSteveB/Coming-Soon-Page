const input = document.querySelector("input");
const button = document.querySelector("button");

let email = "";


const emailChecker = (value) => {

    input.addEventListener('input', (e) => {
        email = e.target.value;
        console.log(email);
    });
            if(!value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){

                document.querySelector("input").classList.add("error");
                document.querySelector("form > p").classList.remove ("hidden");
                email = null;
            console.log('email incorrect');

            } else {
                document.querySelector("input").classList.remove("error");
                document.querySelector("form > p").classList.add("hidden");
                email = value;
                console.log("email correct !");
            };
};

button.addEventListener('click', (e)=>{
    e.preventDefault();

    emailChecker(email);
})