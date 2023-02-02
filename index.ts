// 함수 전체를 alias로 지정
type 함수타입 = (a: string) => number;
// === function 함수(a: string): number {
//   return 123;
// }

let 함수: 함수타입 = function (a) {
  return 10;
};

type Member = {
  name: string;
  age?: number;
  plusOne: (a: number) => number;
  changeName?: () => void;
};
let 회원정보: Member = {
  name: "kim",
  plusOne(a) {
    return a + 1;
  },
  changeName: () => {},
};
회원정보.plusOne(123);

// callback function
// 함수 안에 함수는 callback 함수
function 함수1(a) {
  a();
}
function 함수2() {}
함수1(함수2);

// 숙제
type CutType = (x: string) => string;
// function cutZero(a: string): string { -- 내 답
//   if (a[0] === "0") return a.substring(1);
//   else return a;
// }
let cutZero: CutType = function (x) {
  let result = x.replace(/^0+/, "");
  return result;
};
function removeDash(a: string): number {
  const convert = a.replace(/\-/g, "");
  // return Number(convert); // or
  return parseFloat(convert);
}
type RemoveType = (a: string) => number;
let removeDash2: RemoveType = function (a) {
  return parseFloat(a);
};
console.log(cutZero("0룰루"));
console.log(removeDash("110-1234-5678"));

// 내꺼 틀린 답
// type 숙제타입 = {
//   첫째: string;
//   둘째: (a: string) => number;
//   셋째: (a: string) => number;
// };
type 함수타입1 = (a: string) => string;
type 함수타입2 = (a: string) => number;
function 만들함수(a: string, b: 함수타입1, c: 함수타입2) {
  let result = b(a);
  let result2 = c(result);
  return console.log(result2);
}
만들함수("010-1111-2222", cutZero, removeDash);
