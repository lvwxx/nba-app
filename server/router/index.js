const router = require('koa-router')();

const result = require('./result');

router.use('/api/result', result.routes(), result.allowedMethods());

module.exports = router;