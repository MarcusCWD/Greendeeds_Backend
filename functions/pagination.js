require("dotenv").config();

async function pagination(page, limit) {
    const pageDecision = parseInt(page) || process.env.DEFAULT_PAGINATION_PAGE;
    const limitDecison = parseInt(limit) || process.env.DEFAULT_PAGINATION_LIMIT;
    const offset = (pageDecision - 1) * limitDecison;
    return [limitDecison, offset]
}

module.exports ={ pagination }