// 드디어 파일 모듈화

// - 버튼0 누르면
// - 버튼0,1,2에 붙어있던 orange 클래스명 전부 제거하라고 코드 3줄 짜기
// - 버튼0에 orange 클래스명 부착
// - 박스0,1,2에 붙어있던 show 클래스명 전부 제거하라고 코드 3줄 짜기
// - 박스0에 show 클래스명 부착

// 오늘의 숙제 :
// 탭 기능 알아서 다 코드짜기

// $( ) 셀렉터로 찾은 요소 중, x번째 요소만 선택하고 싶으면 $( ).eq(x) 사용

// 반복문을 이용하여 코드 길이를 줄일 수 있다.
// length 사용해서 확장성있는 코드로 바꾸기
for (let i = 0; i < $(".tab-button").length; i++) {
  $(".tab-button")
    .eq(i)
    .on("click", function () {
      탭열기(i);
    });
}

// 이벤트 버블링을 이용해서 이벤트 리스너 1개만 쓰기
$(".list").click(function (e) {
  // dataset 이용해서 코드 줄이기
  탭열기(e.target.dataset.id);
  console.log(e.target.dataset.id);

  // 지금 누른게 버튼 0이면 탭열기(0)
  // if (e.target == document.querySelectorAll(".tab-button")[0]) {
  //   탭열기(0);
  // }
  // 지금 누른게 버튼 1이면 탭열기(1)
  // if (e.target == document.querySelectorAll(".tab-button")[1]) {
  //   탭열기(1);
  // }
  // 지금 누른게 버튼 2이면 탭열기(2)
  // if (e.target == document.querySelectorAll(".tab-button")[2]) {
  //   탭열기(2);}
});

// 전에 만들었던 탭기능 함수로 축약
function 탭열기(숫자) {
  $(".tab-button").removeClass("orange");
  $(".tab-button").eq(숫자).addClass("orange");
  $(".tab-content").removeClass("show");
  $(".tab-content").eq(숫자).addClass("show");
}
