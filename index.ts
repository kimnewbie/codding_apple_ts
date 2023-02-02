type Animal = string | number | undefined; // (union type => type alias/타입 변수)

let 동물: Animal = "kim";

type List = { name: string; age: number };
let 리스트: List = { name: "kim", age: 20 };

// 작명 tip : 첫 시작은 대문자 혹은 Type을 변수명 뒤에 붙인다

const 출생지역 = "seoul";
// 출생지역 = 'busan'; // const 변수는 바뀌지 않음

const 지역 = { region: "seoul" }; // object는 수정 가능
지역.region = "busan";

// typescript에서 lock 가능(but 이렇게 해도 js에서는 실행 가능)
type Girlfriend = {
  readonly name: string;
};
const 여친: Girlfriend = {
  name: "엠버",
};
// 여친.name = "유진"; // readonly를 사용하면 수정 불가

// obj 속성 안에도 '?' 사용 가능
type Boyfriend = {
  name?: string;
};
const 남자친구: Boyfriend = {
  name: "손석구",
};
남자친구.name = "차니니";

// type 합치기 (1)
type Name = string;
type Age = number;
type Person = Name | Age;

// type 합치기 (2) -- obj extend
type PositionX = { x: number };
type PositionY = { y: number };
// { x: number, y: number } // 합치고 싶을 때
type NewType = PositionX & PositionY;
let position: NewType = { x: 10, y: 20 };

// 같은 이름의 type 변수는 재정의 불가능 -- 엄격함

// 숙제
type Homework = {
  color?: string;
  size: number;
  readonly position: number[];
};
const 숙제: Homework = {
  size: 123,
  position: [1, 2, 3],
};

type 정보 = {
  name: string;
  phone: number;
  email?: string;
};
const info: 정보 = { name: "kim", phone: 123, email: "abc@naver.com" };
type 어른 = {
  adult: boolean;
};
type NewUser = 정보 & 어른;
const 회원가입정보: NewUser = {
  name: "kim",
  adult: false,
  phone: 1234,
};
