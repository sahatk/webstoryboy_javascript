//움직임 효과
document.addEventListener("mousemove", (e) => {
  gsap.to(".cursor", {duration: .5, left:e.pageX, top:e.pageY});

  //출력
  document.querySelector(".pageX").innerText = e.pageX + "px";
  document.querySelector(".pageY").innerText = e.pageY + "px";

  //오버 효과
  document.querySelectorAll(".mouseCont em").forEach( (em) =>{
    em.addEventListener("mouseenter", () => {
      document.querySelector(".cursor").classList.add("active");
    });
    em.addEventListener("mouseleave", () => {
      document.querySelector(".cursor").classList.remove("active");
    });
  });

  document.querySelectorAll(".info").forEach( (em) =>{
    em.addEventListener("mouseenter", () => {
      document.querySelector(".cursor").classList.add("show");
    });
    em.addEventListener("mouseleave", () => {
      document.querySelector(".cursor").classList.remove("show");
    });
  });
});

