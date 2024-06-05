// todo: alles
// todo: gebruik .env!

export const getCats = (sortQueryParam) => {
    /*  Gebruik de URL query string: ?sort=${sortQueryParam} -> ?sort=+rating of ?sort=-rating
        Zie: https://developer.mozilla.org/en-US/docs/Web/API/URL/search

        Bijvoorbeeld: ......../cats?sort=-rating -> get cats, descending on rating
        Of: ......../cats?sort=+rating -> get cats, ascending on rating
    */

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
    console.warn('todo: getCats, sorted!', sortQueryParam)
}

export const getCat = (id) => {
    console.warn('todo: get a Cat by id', id)
}

export const postCat = (payload) => {
    console.warn('todo: post a Cat', payload)
}

export const patchCat = (payload) => {
    console.warn('todo: patch a Cat', payload)
}
