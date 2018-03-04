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

/* reset min-widths */
#tabs, 
div#wrap {
    min-width: 0;
}

div#wrap {
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

.postbody,
#message-box {
    width: 100%;
}

/* forum & topic lists */
.topiclist dl>:not(dt),              /* all except name */
.postprofile,

/* post form */
#format-buttons, 
#smiley-box,
#postform .fields1 dl,
#postform>h3,
#postform>#topicreview,

/* head & foot */
#site-description>:not(a),           /* all except logo */
.navbar .navlinks>:not(.icon-home),  /* all except breadcrumbs */
.display-options,                    /* thread/forum view options */
.section-viewtopic form#viewtopic,
#jumpbox,
#page-body>h3,
#page-body>p,
#search-box,
#page-footer {
    display: none;
}
`
