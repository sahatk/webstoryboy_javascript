const cursor = document.querySelector(".cursor");
const follower = document.querySelector(".cursor-follower");

document.addEventListener("mousemove", (e) => {
  //커서
  // cursor.style.left = e.pageX - 5 + "px";
  // cursor.style.top = e.pageY - 5 + "px";
  // follower.style.left = e.pageX - 15 + "px";
  // follower.style.top = e.pageY - 15 + "px";

  // let x1 = e.pageX -5 + "px";
  // let y1 = e.pageY -5 + "px";
  // let x2 = e.pageX -15 + "px";
  // let y2 = e.pageY -15 + "px";

  // cursor.style.cssText = "left:" + x1 + "; top:" + y1;
  // follower.style.cssText = "left:" + x2 + "; top:" + y2;

  gsap.to(cursor, {duration : 0.3, left: e.pageX -5, top:e.pageY -5})
  gsap.to(follower, {duration : 0.5, left: e.pageX -15, top:e.pageY -15})

  //오버 효과
  document.querySelectorAll(".mouseCont em").forEach((em)=>{
    em.addEventListener("mouseenter", () => {
      cursor.classList.add("active");
      follower.classList.add("active");
    });
    em.addEventListener("mouseleave", () => {
      cursor.classList.remove("active");
      follower.classList.remove("active");
    });
  });

  document.querySelectorAll(".info").forEach((em)=>{
    em.addEventListener("mouseenter", () => {
      cursor.classList.add("show");
      follower.classList.add("show");
    });
    em.addEventListener("mouseleave", () => {
      cursor.classList.remove("show");
      follower.classList.remove("show");
    });
  });

  //출력
  document.querySelector(".pageX").innerText = e.pageX;
  document.querySelector(".pageY").innerText = e.pageY;
});


// 보충 
// 1. innerText가 뭔지 아직 부족
// 2. 매개변수 활용 아직 부족

