export function Auth(login, password) {
    return fetch('https://backend.sk.dev2.prometey.cloud/api/auth', {
        method: 'POST',
        headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: 'leo.solo@mail.ru',
            password: 'ktjybl123'
        })
    })
}
