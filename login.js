var Userlogin="http://localhost:3000/user"
function start(){
    getCourses(handlelogin)
}
start();

function getCourses(callback){
    fetch(Userlogin)
   .then(function(response){
       return response.json();
   })
   .then(callback)
}
function handlelogin (User) {
     const inputusername=document.querySelector('#username')
     const inputpassword=document.querySelector('#password')
     const submits= document.querySelector(".submitslogin")
     window.localStorage.setItem('usersLocalStrorage', JSON.stringify(User))
     submits.onclick = () => {
        const arrayUsersJson = JSON.parse(window.localStorage.getItem('usersLocalStrorage'));
        const isUser = arrayUsersJson.some(arrayUserJson => {
            return (arrayUserJson.username == inputusername.value && arrayUserJson.password == inputpassword.value) ? true : false
        })
        if (isUser) {
            const userLogin = {
                username: inputusername.value,
                password: inputpassword.value
            }
            window.localStorage.setItem('currentUser', JSON.stringify(userLogin))
            window.location.href = "index.html"
        } else {
            document.querySelector('.login-alert').innerText = 'Vui lòng nhập lại'
        }
    }
}