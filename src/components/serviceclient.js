var loginUrl = "https://miniprojekti2.herokuapp.com/api/login";
var signupUrl = "https://miniprojekti2.herokuapp.com/api/signup";
var msgUrl = "https://miniprojekti2.herokuapp.com/api/messages";
var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

export function loginFunc(loginData) {
    return fetch(loginUrl, {
        method: 'POST',
        // mode: "cors",
        headers: {
            // 'Accept': 'application/json',
            'Content-Type': 'application/json',
            "cache-control": "no-cache",
        },
        body: JSON.stringify(loginData)
    })
    // .then(resp => resp.json())
    .then(function (response) {
        console.log("loginFunc, ", response)
        return (response);
    });

    
}

export function signinFunc(loginData) {
    return fetch(signupUrl, {
        method: 'POST',
        //mode: "cors",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData)
    }).then(function (response) {
        console.log("signinFunc, ", response)
        return (response);

    });
}

export function getAllMessages() {
    fetch(msgUrl)
        .then(vastaus => vastaus.json())
        .then(data => {
            var returnData = JSON.parse(data)
            this.setState({ data: returnData })
            return (data)
        })
}

export function sendMsgFunc(msgData) {
    return fetch(msgUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "cache-control": "no-cache",
        },
        body: JSON.stringify(msgData)
    })
    // .then(resp => resp.json())
    .then(function (response) {
        console.log("message sent", response)
        return (response);
    });
}