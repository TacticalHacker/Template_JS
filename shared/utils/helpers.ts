// Update route automatically based on course title (slugify)
export const slugify = (str: string): string =>
    str
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');