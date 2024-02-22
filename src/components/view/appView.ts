import { Article, Source } from '../../types';
import News from './news/news';
import Sources from './sources/sources';

interface SourceData{
    status:string;
    sources: Source[];
}

export class AppView {
    private news: News;
    private sources: Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: Article[]) {
        this.news.draw(data);
    }

    drawSources(data: Source[]): void {

        this.sources.draw(data);
    }
}

export default AppView;
