export const removeHtmlTags = (html) => {
    if (typeof DOMParser !== 'undefined') {
        const doc = new DOMParser().parseFromString(html, 'text/html');
        return doc.body.textContent || '';
    } else {
        return html;
    }
};

export const formatExcerpt = (content, maxLength = 100) => {
    const cleanedContent = removeHtmlTags(content);

    if (cleanedContent.length <= maxLength) {
        return cleanedContent;
    }

    const trimmed = cleanedContent.substring(0, maxLength).replace(/\s+\S*$/, '');

    return trimmed + (cleanedContent.length > maxLength ? '...' : '');
};

export const calculateReadingTime = (content, wordsPerMinute = 5) => {
    const cleanedContent = removeHtmlTags(content);
    const readingTimeMinutes = Math.ceil(
        cleanedContent.split(/\s+/).length / wordsPerMinute
    );
    return readingTimeMinutes;
};
