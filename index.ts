function 내함수(x: number | string) {
  // return x + 1; // --error x가 애매
  if (typeof x === "number") {
    return x + 1;
  } else {
    return x + "1";
  }
}

내함수(123);

function 내함수2(x: number | string) {
  let array: number[] = [];

  // 방법 1 type 체크
  // if (typeof x === "number") {
  //   array[0] = x;
  // }

  // 방법2 assertion 문법으로 타입 덮어쓰기
  // (1) Narrowing 할 때 사용 (타입이 여러 개인 경우)
  // (2) 무슨 타입이 들어올지 100% 확실할 때 사용
  // 고로 남이 짠 코드 수정하거나 왜 타입에러가 나는지 모르겠을 때, 비상용으로 사용
  array[0] = x as number;
  array[0] = <number>x;
}

내함수2(123);
