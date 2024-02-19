const username = document.getElementById('username')
const password = document.getElementById('password')
const viewPassword = document.getElementById('viewPassword')
const loginBtn = document.getElementById('loginBtn')

const users = [
    {
        username: 'naruto',
        password: 'naruto'
    },
    {
        username: 'dragonball',
        password: 'dragonball'
    },
]

viewPassword.addEventListener('click', () => {
    const type = password.getAttribute('type')
    if (type == 'password') {
        password.setAttribute('type', 'text')
    } else {
        password.setAttribute('type', 'password')
    }
})

loginBtn.addEventListener('click', (e) => {
    e.preventDefault()

    const usernameValue = username.value
    const passwordValue = password.value
    // const data = {
    //     username: username.value,
    //     password: password.value
    // }

    const correctData = users.find((correctData) => 
    correctData.username == usernameValue && correctData.password == passwordValue)

    if (correctData) {
        localStorage.setItem('isLogged', true)
        window.location.href = '../index.html'
    } else {
        alert ('Incorrect username or password')
    }
})

if (localStorage.getItem('isLogged')) {
    const login = document.getElementById('login')
    login.innerHTML = 
    `<button id='logout'>Logout<button>
    <a href = '../index.html'>
    <i class="bi bi-arrow-left"></i>Go back</a>`

    const logout = document.getElementById('logout')
    logout.addEventListener('click', () => {
        localStorage.removeItem('isLogged')
        window.location.href = './index.html'
    })
}