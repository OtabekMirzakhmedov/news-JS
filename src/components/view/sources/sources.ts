import './sources.css';
import { Source, SourceResponse } from '../../../types';

class Sources {
    public draw(data: SourceResponse): void {
        const sourcesDropdown: HTMLSelectElement = document.createElement('select');
        sourcesDropdown.classList.add('sources-dropdown');

        const placeholderOption: HTMLOptionElement = document.createElement('option');
        placeholderOption.value = '';
        placeholderOption.textContent = 'Select a source';
        sourcesDropdown.appendChild(placeholderOption);

        data.sources.forEach((item: Source) => {
            const option: HTMLOptionElement = document.createElement('option');
            option.value = item.id;
            option.textContent = item.name;
            sourcesDropdown.appendChild(option);
        });

        const sourcesContainer: Element | null = document.querySelector('.sources');
        if (sourcesContainer) {
            sourcesContainer.appendChild(sourcesDropdown);
        } else {
            console.error('Sources container not found');
        }
    }
}

export default Sources;
