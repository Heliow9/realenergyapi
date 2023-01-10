const instaTouch = require('instatouch');

class InstaController {
    async index(req, res) {

        // Scrape 100 image posts from the user feed
        (async () => {
            try {
                const options = { count: 10, mediaType: 'image' };
                const user = await instaTouch.user('manoheelio', options);
                res.json(user.collector);
            } catch (error) {
                console.log(error);
            }
        })();

    }
}



module.exports = InstaController;