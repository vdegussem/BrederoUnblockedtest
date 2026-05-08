const cors_proxy = require('cors-anywhere');

const host = '0.0.0.0';
const port = process.env.PORT || 10000; 

cors_proxy.createServer({
    originWhitelist: [], // Staat alles toe
    requireHeader: [],   // DIT IS DE CRUCIALE FIX: Staat browser-verzoeken toe
    removeHeaders: [
        'cookie',
        'cookie2',
        'x-frame-options',
        'content-security-policy',
        'set-cookie'
    ]
}).listen(port, host, function() {
    console.log('De BrederoUnblocked proxy draait op poort ' + port);
});
