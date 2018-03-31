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

.topiclist .row dl>* {
    float: none;
}

.topiclist .row .icon {
    background-image: none !important;
}

.topiclist .row .icon>dt {
    padding-left: 5px;
}

.topiclist .row dt {
    float: left;
    width: 70%;
    overflow: scroll;
}

.topiclist dd.lastpost {
    float: right;
    width: 25%;
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

.post .signature {
    display: none;
}

.postbody,
#message-box {
    width: 100%;
}

/* resize images, videos, etc */
.postbody .content * {
    max-width: 100% !important;
    height: auto;
}

/* forum & topic lists */
.topiclist .posts,
.topiclist .topics,
.topiclist .views,
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
