const apiUser = 'http://localhost:3001';
export const addUser = (data, navigate) => {
    fetch(apiUser + '/auth/register', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(res => res.json())
        .then(res => {
            navigate('/auth/login');
        });
};
export const checkUser = async (user) => {
    const res = await fetch(apiUser + '/auth/login', 
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        }
    );
    const data = await res.json();
    return data;
};