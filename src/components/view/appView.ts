import { SourceResponse, ArticleResponse } from '../../types';
import News from './news/news';
import Sources from './sources/sources';

export class AppView {
    private news: News;
    private sources: Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: ArticleResponse) {
        console.log('appview ', data);
        this.news.draw(data);
    }

    drawSources(data: SourceResponse): void {
        this.sources.draw(data);
    }
}

export default AppView;
