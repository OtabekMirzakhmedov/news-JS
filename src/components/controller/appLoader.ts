import Loader from './loader';
import { Options } from './loader';

interface AppOptions extends Options {
    apiKey: string;
}

class AppLoader extends Loader {
    constructor() {
        const apiUrl: string = process.env.API_URL || '';
        const options: AppOptions = {
            apiKey: process.env.API_KEY || '',
        };

        super(apiUrl, options);
    }
}

export default AppLoader;
