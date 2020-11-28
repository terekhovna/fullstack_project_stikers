export default function http(path, method, body={}) {
    return fetch('http://localhost:8080/api/' + path, {
        method: method,
        body: Object.keys(body).length === 0 ? null : JSON.stringify(body),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        credentials: "include"
    }).then((response) => {
        let jsonPromise = response.json();

        if(response.status >= 400) {
            return jsonPromise.then(response => {
                throw response;
            });
        }

        return jsonPromise;
    })
}