let 회원들: (number | string)[] = [1, "2", 3];
let 오브젝트: { a: string | number } = { a: 123 };

let 이름: unknown;
이름 = 123;
이름 = "김";
이름 = {};

// 이름 - 1; // --error

let 나이: string | number;
// 나이 + 1; // --error string + 1(허용) number + 1(허용) string | number + 1 (안돼)

/**
 * 숙제
 */
let user: string = "kim";
let age: undefined | number = undefined;
let married: boolean = false;
let 철수: (string | number | undefined | boolean)[] = [user, age, married];

let 학교: {
  score: (number | boolean)[];
  teacher: string;
  friend: string[] | string;
} = {
  score: [100, 97, 84],
  teacher: "Phil",
  friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];
