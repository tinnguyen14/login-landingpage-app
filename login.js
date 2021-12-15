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
        var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        const arrayUsersJson = JSON.parse(window.localStorage.getItem('usersLocalStrorage'));
        const isUser = arrayUsersJson.some(arrayUserJson => {
            return (arrayUserJson.username == inputusername.value && arrayUserJson.password == inputpassword.value)
        })
        if (isUser) {
            const userLogin = {
                username: inputusername.value,
                password: inputpassword.value
            }
            window.localStorage.setItem('currentUser', JSON.stringify(userLogin))
            window.location.href = "index.html"
            
        } else if(format.test(inputpassword.value)) {
            document.querySelector('.errorpassword').innerHTML='<span>Mật khẩu không được có ký tự đặc biệt</span>'
        }
        else{
            document.querySelector('.errorpassword').innerHTML='<span>Tên đăng nhập hoặc mật khẩu không đúng</span>'
        }
  }
}