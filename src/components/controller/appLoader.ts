import Loader from './loader';
import { Options } from './loader';

interface AppOptions extends Options {
    apiKey: string;
}

class AppLoader extends Loader {
    constructor() {
        const apiUrl: string = process.env.API_URL || ''; // Type annotation for apiUrl
        const options: AppOptions = {
            apiKey: process.env.API_KEY || '', // Type annotation for apiKey
        };

        super(apiUrl, options);
    }
}

export default AppLoader;
