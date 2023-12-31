/*
    index.html을 위한 javascript code
*/
console.log('index.js');

function login(username, password) {
    $.ajax({
        type : 'post',           // 타입 (get, post, put 등등)
        url : '/test',           // 요청할 서버url
        async : true,            // 비동기화 여부 (default : true)
        headers : {              // Http header
          "Content-Type" : "application/json",
          "X-HTTP-Method-Override" : "POST"
        },
        dataType : 'text',       // 데이터 타입 (html, xml, json, text 등등)
        data : JSON.stringify({  // 보낼 데이터 (Object , String, Array)
          "no" : no,
          "name" : username,
          "password": password,
          "nick" : nick
        }),
        success : function(result) { // 결과 성공 콜백함수
            console.log(result);
        },
        
    })
};