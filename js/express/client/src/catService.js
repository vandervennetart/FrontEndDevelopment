// todo: everything...
// todo: use .env

export const getCats = () => {
    return fetch(import.meta.env.VITE_API_URL + "/cats")
        .then((response) => {
            if (!response.ok) throw new Error(response.statusCode);
            return response;
        })
        .then((response) => response.json())
        .then((json) => {
            return json;
        })
        .catch((e) => console.error(e));
};

export const getCat = (id) => {
    return fetch(import.meta.env.VITE_API_URL + "/cats/" + id)
        .then((response) => {
            if (!response.ok) throw new Error(response.statusCode);
            return response;
        })
        .then((response) => response.json())
        .then((json) => {
            return json;
        })
        .catch((e) => console.error(e));
};

export const postCat = async (payload) => {

    return fetch(import.meta.env.VITE_API_URL + "/cats", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    }).then(async res => {
        if (!res.ok) {
            const message = await res.json()
            throw message;
        }
        return res.json();
    });
};
