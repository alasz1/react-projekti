var loginurl = "https://miniprojekti2.herokuapp.com/api/login";
var signinUrl = "https://miniprojekti2.herokuapp.com/api/signin";

export function loginFunc(loginData) {
    fetch(loginurl, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData)
    }).then(function (response) {
        return (response);
    });
}

export function signinFunc(loginData) {
    return fetch(signinUrl, {
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