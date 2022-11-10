const cursor = document.querySelector(".cursor");
const width = cursor.offsetWidth; //padding 포함된 값
const width2 = cursor.clientWidth; //padding 포함되지 않은 값
const height = cursor.offsetHeight; //padding 포함된 값
const height2 = cursor.clientHeight; //padding 포함되지 않은 값
const circle = cursor.getBoundingClientRect();
console.log(circle);

function follow(e) {
  gsap.to(cursor, {duration: 0.3, left:e.pageX - circle.width/2 , top:e.pageY - circle.height/2});

  //출력
  document.querySelector(".pageX").innerText = e.pageX +"px";
  document.querySelector(".pageY").innerText = e.pageY +"px";
}

window.addEventListener("mousemove", follow);
