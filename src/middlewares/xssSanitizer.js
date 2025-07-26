const xssFilters = require('xss-filters');

const sanitizeBody = (req, res, next) => {
    if (req.body) {
        for (const key in req.body) {
            if (typeof req.body[key] === 'string') {
                req.body[key] = xssFilters.inHTMLData(req.body[key]);
            }
        }
    }
    next();
};

module.exports = sanitizeBody;
