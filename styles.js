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
    padding: 0 2px 10px;
}

.topiclist .row dt {
    width: 100%;
}

.attachbox {
    float: none;
    overflow: auto;
}

.attachbox .thumbnail img {
    width: 100%;
    height: auto;
}

.post {
    background-image: none;
    margin-top: 0.5em;
}

.postbody {
    width: 100%;
}

#site-description>:not(a),           /* all except logo */
.navbar .navlinks>:not(.icon-home),  /* all except breadcrumbs */
.topiclist dl>:not(dt),              /* all except name */
.display-options,                    /* thread/forum view options */
.section-viewtopic form#viewtopic,
.postprofile,
#jumpbox,
#page-body>h3,
#page-body>p,
#search-box,
#page-footer {
    display: none;
}
`
