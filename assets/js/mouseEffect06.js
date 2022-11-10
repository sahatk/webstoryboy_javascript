function mouseMove(e){
  let pageX = 0,
      pageY = 0,
      standardX = 0,
      standardY = 0;

  //마우스 좌표 값 설정
  pageX = e.pageX;
  pageY = e.pageY;

  //기준점을 가운데로 설정
  standardX = window.innerWidth/2 - pageX;
  standardY = window.innerHeight/2 - pageY;

  //이미지 움직임 설정
  const move = document.querySelector(".moveImage");
  move.style.transform = "translate(-50%, -50%) perspective(600px) rotateX("+standardY+"deg) rotateY("+standardX+"deg);"


  //커서
  gsap.to(".cursor", {duration: 0.3, left:pageX, top:pageY})

  //출력
  document.querySelector(".pageX").textContent = pageX;
  document.querySelector(".pageY").textContent = pageY;
  document.querySelector(".standardX").textContent = standardX;
  document.querySelector(".standardY").textContent = standardY;
}
document.addEventListener("mousemove", mouseMove);