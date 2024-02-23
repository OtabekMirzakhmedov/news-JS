import AppLoader from './appLoader';
import { ArticleResponse, SourceResponse } from '../../types';

class AppController extends AppLoader {
    getSources(callback: (data: SourceResponse) => void): void {
        super.getResp<SourceResponse>(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    getNews(callback: (data: ArticleResponse) => void): void {
        const dropdown = document.querySelector('.sources-dropdown') as HTMLSelectElement;
        console.log(dropdown);
        const sourceId: string = dropdown.value;
        console.log('controller, ', sourceId);
        super.getResp<ArticleResponse>(
            {
                endpoint: 'everything',
                options: {
                    sources: sourceId,
                },
            },
            callback
        );
    }
}

export default AppController;
