var loginurl = "https://miniprojekti2.herokuapp.com/api/login";
var signupUrl = "https://miniprojekti2.herokuapp.com/api/signup";

export function loginFunc(loginData) {
    return fetch(loginurl, {
        method: 'POST',
        mode: "cors",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData)
    }).then(function (response) {
        console.log("loginFunc, ", response)
        return (response);
    });
}

export function signinFunc(loginData) {
    return fetch(signupUrl, {
        method: 'POST',
        mode: "cors",
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

export function getAll() {
    fetch(this.state.url)
    .then(vastaus => vastaus.json())
    .then(data => {
        this.setState({ data: data })
    })
}