
// namespace주기 빈 JSON객체를 많이 이용
// 자바스크립트에서 변수명으로 쓸수 있는 특수문자 _와$
var $ = {};   // 빈 객체
$.ajax = function (p_json) { // ajax를 $의 요소로 만들어줌
    var v_ajax = new XMLHttpRequest();
    v_ajax.open(p_json.method, p_json.url, p_json.async);
    v_ajax.onreadystatechange = function () {
        if (v_ajax.readyState == 4 && v_ajax.status == 200) {
            if (p_json.dataType == "json") {
                p_json.success(JSON.parse(v_ajax.responseText));
                return; // 끝내기, else인 경우를 실행시키지 않기 위함
            }
            p_json.success(v_ajax.responseText); // success가 가리키는 함수를 v_ajax.responseText를 패러미터로 넣어 실행시키게 함
        }
    }
    v_ajax.send();
}

/*
$.ajax({
    method: "get",
    url: "../정리.txt",
    async: true,
    success: function (p_rslt) { // 위의 정의에 따라 p_rslt는 v_ajax.responseText가 됨
        // 넘어온 값으로 뭘 할지는 여러분 마음
        alert("이해되남?" + p_rslt);
    }
}); // ajax 실행
alert("동기 확인!!");

*/