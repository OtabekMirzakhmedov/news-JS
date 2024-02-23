import './sources.css';
import { Source, SourceResponse } from '../../../types';

class Sources {
    public draw(data: SourceResponse): void {
        const fragment: DocumentFragment = document.createDocumentFragment();
        const sourceItemTemp: HTMLTemplateElement | null = document.querySelector('#sourceItemTemp');

        if (!sourceItemTemp) {
            console.error('Source item template not found');
            return;
        }

        data.sources.forEach((item: Source) => {
            const sourceClone: DocumentFragment = sourceItemTemp.content.cloneNode(true) as DocumentFragment;
            const sourceItemElement: Element | null = sourceClone.querySelector('.source__item');

            if (sourceItemElement) {
                sourceItemElement.setAttribute('data-source-id', item.id);
            }

            const sourceItemName: Element | null = sourceClone.querySelector('.source__item-name');
            if (sourceItemName) {
                sourceItemName.textContent = item.name;
            }

            fragment.appendChild(sourceClone);
        });

        const sourcesContainer: Element | null = document.querySelector('.sources');
        if (sourcesContainer) {
            sourcesContainer.innerHTML = '';
            sourcesContainer.appendChild(fragment);
        } else {
            console.error('Sources container not found');
        }
    }
}

export default Sources;
