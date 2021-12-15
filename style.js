var barmobie = document.querySelector(".bar-mob");
var menu = document.querySelector(".menu-bottom");
var blackbg = document.querySelector(".black-bg");
var close = document.querySelector(".close");
var body = document.querySelector("body");

barmobie.onclick = () => {
  menu.classList.add("active");
  blackbg.classList.add("active");
  close.classList.add("active");
  body.classList.add("no-scroll");
};
blackbg.onclick = () => {
  menu.classList.remove("active");
  blackbg.classList.remove("active");
  close.classList.remove("active");
  body.classList.remove("no-scroll");
};
close.onclick = () => {
  menu.classList.remove("active");
  blackbg.classList.remove("active");
  close.classList.remove("active");
  body.classList.remove("no-scroll");
};
window.onscroll = () => {
  if (window.pageYOffset > 40) {
    menu.classList.add("hide");
  } else {
    menu.classList.remove("hide");
  }
};
slides = () => {
  $(".slide-product").slick({
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          prevArrow: false,
          nextArrow: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          prevArrow: false,
          nextArrow: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: false,
          nextArrow: false,
        },
      },
    ],
  });
};

var courseApi = "http://localhost:3000/populars";
function start() {
  getCourses(rederCourses);
}
start();
function getCourses(data) {
  fetch(courseApi)
    .then(function (response) {
      return response.json();
    })
    .then(data);
}
function rederCourses(populars) {
  const popularz=document.querySelectorAll('.slide-product')
   for (let i = 0; i < popularz.length; i++) {
  const getData=populars.map(function(course) {
       return `
       <div class="col" id="${course.id}">
       <div class="card">
        <a href="" class="card-img"><img class="card-img-top" src="${course.img}" alt=""></a>
         <div class="card-body text-center">
            <h6 class="card-title">${course.name}</h6>
            <p class="card-text">${course.price}₫</p>
            <button class="add-cart">Thêm vào giỏ</button>
        </div>
     </div>
 </div>
 `;
  })
  popularz[i].innerHTML = getData.join('')
}
  const courseItems = document.querySelectorAll(".col");
  const productID = []
    courseItems.forEach(item => {
        item.onclick = () => {
          productID.push(Number(item.id))
            const findProduct = populars.filter(items => {
                return productID.some(id => items.id == id)
            })
            const getCourses = findProduct.reduce((a, b) => {
                return b.price + a
            }, 0)
            console.log(getCourses);
        }
    })
    slides();
}
const setUserName = () => {
  const notlogin = document.querySelectorAll(".notlogin");
  const logged = document.querySelector(".logged");
  const loggedsp = document.querySelector(".logged span");
  const logged1 = document.querySelector(".logged1");
  const logout = document.querySelector(".logout");
  const currentUser = JSON.parse(window.localStorage.getItem("currentUser"));
  const username = currentUser.username;
  if (currentUser == null) {
    logged.classList.remove("active");
    logged1.classList.remove("active");
  } else {
    logged.classList.add("active");
    logged1.classList.add("active");
    for (i = 0; i < notlogin.length; i++) {
      notlogin[i].classList.add("active");
    }
    loggedsp.innerHTML = username;
  }
  logout.onclick = () => {
    localStorage.removeItem("currentUser");
    window.location.href = "index.html";
  };
};
setUserName();
