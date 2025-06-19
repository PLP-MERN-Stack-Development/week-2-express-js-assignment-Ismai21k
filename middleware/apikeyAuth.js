//Create an authentication middleware that checks for an API key in the request headers

module.exports = function(req, res, next) {
    const apiKey = req.headers['x-api-key'] || '12345-abcde';
    console.log(`this apikey ${apiKey}`)

    const expectedKey = '12345-abcde';
    

    if(!apiKey || apiKey !== expectedKey){
        res.status(403).json({error: 'Forbidden:Invalid or missing Url'}) 
    };

    next()

};