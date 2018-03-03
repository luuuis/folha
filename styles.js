export const overrideCSS = `
body#phpbb {
    padding: 0;
}

#site-description {
    width: 100%;
}

#site-description #logo img {
    width: 100%;
    height: auto;
}

div#wrap {
    min-width: 0;
    padding: 2px;
}

.topiclist .row dt {
    width: 100%;
}

#site-description>:not(a), /* all except logo */
.navbar>.inner>:not(.navlinks), /* all except breadcrumbs */
.navbar>.inner>.navlinks .rightside, /* hide widgets next to breadcrumbs */
.topiclist dl>:not(dt), /* all except name */
#search-box,
#page-footer {
    display: none;
}
`
