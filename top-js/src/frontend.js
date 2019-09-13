export function fetchData() {
    try {
        fetch('https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc&per_page=100')
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                console.log(JSON.stringify(myJson.items));
                return myJson.items;
            });
    } catch (error) {
        console.error(error);
        return [];
    }
}