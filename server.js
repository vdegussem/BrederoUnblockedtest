const cors_proxy = require('cors-anywhere');

const host = '0.0.0.0';
const port = process.env.PORT || 8080;

cors_proxy.createServer({
    originWhitelist: [], // Laat alle websites toe
    requireHeader: [],   // VERWIJDERT de verplichting voor speciale headers (DIT IS DE FIX)
    removeHeaders: [
        'cookie',
        'cookie2',
        'x-frame-options',
        'content-security-policy',
        'set-cookie'
    ],
    handleOptions: true
}).listen(port, host, function() {
    console.log('Proxy is gefixt en draait op poort ' + port);
});
