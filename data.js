var artists = {
    0: {
        "artist_name":null,
        "artist_bio": null,
        "artist_interview":null,
        "image":null
    },
    1: {
        "artist_name":null,
        "artist_bio": null,
        "artist_interview":null,
        "image":null
    },
    2: {
        "artist_name":null,
        "artist_bio": null,
        "artist_interview":null,
        "image":null
    }
};

var works = {
    0: {
        "artist": artists[0],
        "title": null,
        "caption": null,
        "description": null,
        "image": null
    },
    1: {
        "artist": artists[0],
        "title": null,
        "caption": null,
        "description": null,
        "image": null
    },
    2: {
        "artist": artists[1],
        "title": null,
        "caption": null,
        "description": null,
        "image": null
    },
    3: {
        "artist": artists[1],
        "title": null,
        "caption": null,
        "description": null,
        "image": null
    },
    4: {
        "artist": artists[2],
        "title": null,
        "caption": null,
        "description": null,
        "image": null
    },
    5: {
        "artist": artists[2],
        "title": null,
        "caption": null,
        "description": null,
        "image": null
    }
};

var beacon2art = {
    "1507110507": works[0],
    "4556564072": works[1],
    "6046356367": works[2],
    "4967229621": works[3],
    "54450962": works[4],
    "236807349": works[5]
};

exports.beacon2art = beacon2art;