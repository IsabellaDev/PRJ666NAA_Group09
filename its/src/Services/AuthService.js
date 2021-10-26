export default {
    login: user => {
        return fetch('http://localhost:5000/users/login', {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
            // credentials: 'include'
        }).then(res => {
            if (res.status !== 401)
                return res.json().then(data => data);
            else
                return { isAuthenticated: false, user: { userName: "" } };
        });
    },
    register: user => {
        return fetch('http://localhost:5000/users/register', {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            if (res.status !== 401)
                return res.json().then(data => data);
            else
                return { isAuthenticated: false, user: { userName: "" } };
        });
    },
    logout: () => {
        return fetch('http://localhost:5000/users/logout')
            .then(res => res.json())
            .then(data => data);
    },
    isAuthenticated: () => {
        return fetch('http://localhost:5000/users/authenticated')
            .then(res => {
                if (res.status !== 401)
                    return res.json().then(data => data);
                else
                    return { isAuthenticated: false, user: { userName: "" } };
            })
    },
    isAdmin: () => {
        return fetch('http://localhost:5000/users/admin')
            .then(
                res => {
                    if (res.status !== 401)
                        return res.json().then(data => data);
                    else
                        return { isAuthenticated: false, user: { userName: "" } };
                })
    }
}