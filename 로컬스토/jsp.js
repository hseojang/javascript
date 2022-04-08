var request = {}; // 네임스페이스용 빈 객체
request.getParameter= function(p_name){
    if(location.href.indexOf("?") == -1){ //최소한의 안전장치
        return null;
    }
    var v_queryString = location.href.split("?")[1];
    var v_params = v_queryString.split("&");
    for(var i=0; i< v_params.length; i++){
        var v_name = v_params[i].split("=")[0];
        var v_value = v_params[i].split("=")[1];
        if(v_name == p_name){
            return  decodeURIComponent(v_value).replaceAll("+"," ");
        }
    }
    return null;
}

request.getParameterValues= function(p_name){
    if(location.href.indexOf("?") == -1){ //최소한의 안전장치
        return null;
    }
    var v_values = []; // 찾은 것들을 담을 빈 배열
    var v_queryString = location.href.split("?")[1];
    var v_params = v_queryString.split("&");
    for(var i=0; i< v_params.length; i++){
        var v_name = v_params[i].split("=")[0];
        var v_value = v_params[i].split("=")[1];
        if(v_name == p_name){ //찾았다면 배열에 담음,return하면 안됨(끝나니깡)
            v_values.push(decodeURIComponent(v_value).replaceAll("+"," "));
        }
    }
    if(!v_values.length){
        return null;
    }
    return v_values;
}

var out = {}; //네임스페이스용 빈 객체
out.print = document.write.bind(document);
out.println = function(p_msg){
    document.write(p_msg+"<br>");
}
