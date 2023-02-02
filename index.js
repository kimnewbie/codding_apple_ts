// Literal Types
var 이름; // kim만 들어올 수 있음
var 접니다;
접니다 = "솔로";
접니다 = "대머리";
// 함수에도 사용 가능
function 함수(a) {
    return 1;
}
function 실습(a) {
    return ["가위"];
}
실습("가위");
//
var 자료 = {
    name: "kim",
};
// as const = 효과1. obj value 값을 그대로 타입으로 지정
// as const = 효과2. obj 속성들에 모두 readonly 붙여줌
console.log(자료.name); // node index.js 로 콘솔에 침
// kim이라는 자료만 들어올 수 있습니다 X
// kim이라는 타입만 들어올 수 있습니다 o
function 내함수(a) { }
내함수("kim");
내함수(자료.name); // --error
//# sourceMappingURL=index.js.map