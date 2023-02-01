function 함수(x: number): number {
  return x * 2;
}

함수(2);

/* void 함수 */
function 함수2(x: number): void {
  x * 2;
}

함수2(2);

/* 함수 호출시 파라미터 없어도 가능토록 */
function 함수3(x?: number): void {}

함수3();

function 함수4(x: number | string): void {}

함수4(2);
함수4("1234");

// function 함수5(x: number | string): void {
//   if (typeof x) { // 조건문
//     console.log(x + 3); // --error 왜인지 모르게뜸
//   }
// }

/**
 * 숙제
 */
function 이름(name?: string) {
  if (name === undefined) {
    return console.log("이름이 없습니다");
  } else {
    return console.log("안녕하세요 " + name);
  }
}

// function sayHi(x? :string ){
//   if (x) {
//     console.log('안녕하세요 ' + x)
//   } else {
//     console.log('왜입력안함')
//   }
// }

이름("홍길동");
이름();

function 자릿수세기(x: string | number) {
  return console.log(x.toString().length);
}

자릿수세기("진짜왜그랭");

function 결혼가능하냐(
  월소득: number,
  집보유여부: boolean,
  매력점수: string
): string | void {
  let 총합: number = 0;
  총합 += 월소득;
  if (집보유여부) {
    총합 += 500;
  }
  if (매력점수 === "상") {
    총합 += 100;
  }

  if (총합 >= 600) {
    return console.log("결혼가능");
  } else {
    console.log("결혼못해");
  }
}

결혼가능하냐(700, false, "중");
결혼가능하냐(100, false, "상");
