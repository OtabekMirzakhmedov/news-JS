interface Options{
    [key: string]: string; 
}
class Loader {
    private baseLink: string;
    private options: Options;
    constructor(baseLink, options) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp(
        { endpoint, options = {} },
        callback = () => {
            console.error('No callback for GET response');
        }
    ) {
        this.load('GET', endpoint, callback, options);
    }

    errorHandler(res) {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options, endpoint) {
        const urlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    load(method, endpoint, callback, options = {}) {
        const url = this.makeUrl(options, endpoint);
        console.log('Request URL:', url); // Print the request URL

        fetch(url, { method })
            .then(this.errorHandler)
            .then((res) => {
                console.log('Response:', res); // Print the response object before parsing
                return res.json();
            })
            .then((data) => {
                console.log('Parsed Data:', data); // Print the parsed JSON data
                callback(data);
            })
            .catch((err) => console.error(err));
    }
}

export default Loader;
