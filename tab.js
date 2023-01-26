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
      $(".tab-button").removeClass("orange");
      $(".tab-button").eq(i).addClass("orange");
      $(".tab-content").removeClass("show");
      $(".tab-content").eq(i).addClass("show");
    });
}
