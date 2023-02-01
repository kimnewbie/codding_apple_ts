var 회원들 = [1, "2", 3];
var 오브젝트 = { a: 123 };
var 이름;
이름 = 123;
이름 = "김";
이름 = {};
// 이름 - 1; // --error
var 나이;
// 나이 + 1; // --error string + 1(허용) number + 1(허용) string | number + 1 (안돼)
/**
 * 숙제
 */
var user = "kim";
var age = undefined;
var married = false;
var 철수 = [user, age, married];
var 학교 = {
    score: [100, 97, 84],
    teacher: "Phil",
    friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];
