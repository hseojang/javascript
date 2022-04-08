 // alert(location.href);
    // 한글은 인코딩이 없으면 깨짐
    // 쿼리스트링에서 제목만 잘라냄
    // var v_title = location.href.split("?")[1].split("&")[0].split("=")[1];
    // alert(v_title);

    /*  encoding            decoding 세트
    escape                unescape              아주 옛날 고래적 세트
    encodeURI             decodeURI             조금 예전 세트
    encodeURIComponent    decodeURIComponent    요즘 사용 세트
    */

    //개발자라면 상황이 정리가 안 된 듯 보인다면 일반화(추상화)를 시도해 봅니다.

    var request = {};
    // var getParameter = function (p_name) {
    request.getParameter = function (p_name) { // 이렇게 선언하면 request 객체의 함수로 선언된다.
        if (location.href.indexOf("?") == -1) { // 최소한의 안전장치
            return null;
        }

        var v_queryString = location.href.split("?")[1];
        var v_params = v_queryString.split("&");
        for (var i = 0; i < v_params.length; i++) {
            var v_name = v_params[i].split("=")[0];
            var v_value = v_params[i].split("=")[1];
            if (v_name == p_name) {
                return decodeURIComponent(v_value).replaceAll("+", " ");
                // replace() : 첫번째 원소를 바꿈
                // replaceAll() : 전체를 바꿈
            }
            // return null; 
            // 여기에 리턴을 넣으면 왜 다른 변수가 null로 나오지?
            // 이유 : p_name과 v_name이 일치하기 앞서서 비교하는 for문 진행 중 null이 반환되고 함수가 끝나서
        }
        // (return; 이 생략되어있음)
        return null;
    }

    request.getParameterValues = function (p_name) { // 여러개의 값을 가져오는 함수
        if (location.href.indexOf("?") == -1) { // 최소한의 안전장치
            return null;
        }
        
        var v_values = [];
        var v_queryString = location.href.split("?")[1];
        var v_params = v_queryString.split("&");
        for (var i = 0; i < v_params.length; i++) {
            var v_name = v_params[i].split("=")[0];
            var v_value = v_params[i].split("=")[1];
            if (v_name == p_name) {
                // 일치하는 값을 찾을 때 배열에 담기, return하면 함수가 종료되므로 하지 않는다
                v_values.push(decodeURIComponent(v_value).replaceAll("+", " "));
            }
        }
        if(!v_values.length){ // v_values.length==0 와 같다. 0=false인 자바스크립트의 특성
            return null; // 빈 배열을 null 처리
        }
        return v_values;
    }

    // 함수가 잘 작동하는지 확인
    // alert(getParameter("nm_writer")); 
    // 해당되는 값이 없으면 undefined가 뜸
    // => 생략되어있을 뿐 함수는 종료될 때 무조건 return함


