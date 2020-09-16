export const Slides =
    [
        {
            "name": "CellaFM",
            "description": "Online Radio Station",
            "information": "A fucking lot of information will eventually go here for everyone to read and enjoy",
            "client": "University Project",
            "type": "Design, Development",
            "link": "github.com",
            "image": "cella",
            "route": "/cellafm",
            "content": ["cella", "cella"]
        },
        {
            "name": "Turbo Ciphers",
            "description": "Encoded chat room messenger",
            "information": "A fucking lot of information will eventually go here for everyone to read and enjoy",
            "client": "University Project",
            "type": "Design, Development",
            "link": "github.com",
            "image": "cipher",
            "route": "/cipher",
            "content": ["cipher", "cella"]
        },
        {
            "name": "Echo",
            "description": "Audio Company branding",
            "information": "A fucking lot of information will eventually go here for everyone to read and enjoy",
            "client": "Personal Project",
            "type": "Design, Development",
            "link": "github.com",
            "image": "echo",
            "route": "/echo",
            "content": ["cella", "cipher"]
        }
    ]

export const getSlideByName = (name) => {
    return Slides.filter(slide => {
        return slide.name.includes(name);
    })[0];
}

