let 제목 = document.querySelector("#title");
//1.  if (제목 !== null) 제목.innerHTML = "반가워요"; // narrowing(union type)

/* 2. instanceof 연산자를 많이 사용할 예정 제목이 Element의 자식이니? */
// [instanceof] if (제목 instanceof Element) 제목.innerHTML = "반가워요";

/* 3. 자주 쓰지 않는 게 좋아, 확실할 때 사용하는 게 좋음 */
// [as로 사기 치기] let 제목2 = document.querySelector("#title") as Element;
// 제목2.innerHTML = "반가워요";

/* 4. 오브젝트에 붙이는 ? 물음표 */
if (제목?.innerHTML != undefined) {
  제목.innerHTML = "반가워요";
}

let 링크 = document.querySelector(".link");
/* 링크 주소를 naver.com 에서 kakao.com 으로 변경 */
// [error] if(링크 instanceof Element)
// 상세한 타입으로 해줘야해 [Element] => [HTMLAnchorElement]
// cf. [HTMLHeadingElement], [HTMLButtonElement]
if (링크 instanceof HTMLAnchorElement) {
  링크.href = "https://kakao.com";
}

let 버튼 = document.querySelector("#button");
버튼?.addEventListener("click", function () {
  // [?.] narrow요소로 인정
});

// (숙제1) 버튼을 누르면 이미지를 바꿔봅시다.
let 이미지 = document.querySelector("#image");
if (이미지 instanceof HTMLImageElement) {
  이미지.src = "change.jpg";
}

// (숙제2) 바꾸고 싶은 html 요소가 많습니다.
let 변경할링크 = document.querySelectorAll(".naver");
변경할링크.forEach((element) => {
  if (element instanceof HTMLAnchorElement) {
    element.href = "https://kakao.com";
  }
});
for (let i = 0; i < 3; i++) {
  let a = 변경할링크[i];
  if (a instanceof HTMLAnchorElement) {
    a.href = "https://kakao.com";
  }
}
// querySelectorAll() 셀렉터를 쓰면 많은 요소를 한번에 찾을 수 있습니다.
// 근데 이 경우 타입이 NodeListOf<어쩌구> 이렇게 나오는데 그냥 여러개 찾으면 이런 타입이 된다고 생각하면 됩니다.
// 그리고 forEach 반복문을 이용해서 찾은 요소마다 각각 href 속성을 변경해줬다고 합니다.
