const requireHttps = (process.env.TRUST_PROXY || '').toUpperCase() === 'TRUE'
module.exports = {
    preload: (request, response, next) => {
        if (requireHttps && !request.secure) {
            return response.redirect("https://" + request.headers.host + request.url);
        }
        next();
    }
}