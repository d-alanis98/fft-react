import React from 'react';

const ResourceLink = ({ children, href, openInSameWindow }) => (
    <a
        href = { href }
        target = { openInSameWindow ? 'self' : 'blank' }
        className = 'text-decoration-none text-muted'
    >
        { children }
    </a>
);

export default ResourceLink;