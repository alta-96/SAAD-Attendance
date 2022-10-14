module.exports = (router) => {
    router.get('/', function(req, res) {
        res.json('users');
    });
}


