var loginUrl = "https://miniprojekti2.herokuapp.com/api/login";
var signupUrl = "https://miniprojekti2.herokuapp.com/api/signup";
var msgUrl = "https://miniprojekti2.herokuapp.com/api/messages";
var repliesUrl = "https://miniprojekti2.herokuapp.com/api/replies";
var localmsgUrl ="http://localhost:3000/api/messages";
var currentUserUrl = "https://miniprojekti2.herokuapp.com/api/currentuser";
var logoutUrl = "https://miniprojekti2.herokuapp.com/api/logout";
//var getRepliesUrl = "https://miniprojekti2.herokuapp.com/api/replies"

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

export function loginFunc(loginData) {
    return fetch(loginUrl, {
        method: 'POST',
        credentials: 'include',
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
        return response;
    })
   

    
}

export function signinFunc(loginData) {
    return fetch(signupUrl, {
        method: 'POST',
        credentials: 'include',
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
    console.log("getAllMessages");
    return fetch(msgUrl, {
        method: 'GET',
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    })
        .then(vastaus => vastaus.json())
        .then(response => {
            return response
        });
}

export function sendMsgFunc(msgData) {
    console.log("message: ",msgData)
    return fetch(msgUrl, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
            "cache-control": "no-cache",
        },
        body: JSON.stringify(msgData)
    })
    .then(resp => resp.json())
    .then(function (response) {
        console.log("message sent", response)
        return (response);
    });
}

export function getCurrentUser() {
    console.log("get current user");
    return fetch(currentUserUrl, {
        method: 'GET',
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    })
        .then(vastaus => vastaus.json())
        .then(response => {
            console.log(response)
            return response
        });
}

export function logoutFunc() {
    console.log("logout");
    return fetch(logoutUrl, {
        method: 'GET',
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    })
        .then(vastaus => vastaus.json())
        .then(response => {
            return response
        });
}

export function getAllReplies(id) {
    console.log("getAllReplies");
    return fetch((repliesUrl + "/" + id), {
        method: 'GET',
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    })
        .then(vastaus => vastaus.json())
        .then(response => {
            return response
        });
}

export function sendReplyFunc(replyData) {
    console.log("message: ", replyData)
    return fetch(repliesUrl, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
            "cache-control": "no-cache",
        },
        body: JSON.stringify(replyData)
    })
    .then(resp => resp.json())
    .then(function (response) {
        console.log("message sent", response)
        return (response);
    });
}

export function deleteMessage(id) {
    console.log("deleteMessage");
    return fetch((msgUrl + "/" + id), {
        method: 'DELETE',
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    })
        .then(vastaus => vastaus.json())
        .then(response => {
            return response
        });
}