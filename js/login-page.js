// show password Btn Click

function handleShowPassClick() {
    let passInput = document.querySelector('.password-input');
    if (passInput.type === 'password'){
        passInput.type = 'text';
    }
    else passInput.type = 'password'
}

let showPassBtn = document.querySelector('.show-password-btn');
showPassBtn.addEventListener('click', handleShowPassClick);

let userName = 'Cabbar';
let pass = '123c';

let signInBtn = document.querySelector('.sign-in-btn');
signInBtn.addEventListener('click' , (event)=>{
    event.preventDefault()
    if (document.querySelector('.username-input').value === userName && document.querySelector('.password-input').value === pass){
        location.href = 'users.html'
    }
    else {
        alert('wrong credentials')
    }
});