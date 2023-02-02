// === function 함수(a: string): number {
//   return 123;
// }
var 함수 = function (a) {
    return 10;
};
var 회원정보 = {
    name: "kim",
    plusOne: function (a) {
        return a + 1;
    },
    changeName: function () { },
};
회원정보.plusOne(123);
// callback function
// 함수 안에 함수는 callback 함수
function 함수1(a) {
    a();
}
function 함수2() { }
함수1(함수2);
// function cutZero(a: string): string { -- 내 답
//   if (a[0] === "0") return a.substring(1);
//   else return a;
// }
var cutZero = function (x) {
    var result = x.replace(/^0+/, "");
    return result;
};
function removeDash(a) {
    var convert = a.replace(/\-/g, "");
    // return Number(convert); // or
    return parseFloat(convert);
}
var removeDash2 = function (a) {
    return parseFloat(a);
};
console.log(cutZero("0룰루"));
console.log(removeDash("110-1234-5678"));
function 만들함수(a, b, c) {
    var result = b(a);
    var result2 = c(result);
    return console.log(result2);
}
만들함수("010-1111-2222", cutZero, removeDash);
//# sourceMappingURL=index.js.map