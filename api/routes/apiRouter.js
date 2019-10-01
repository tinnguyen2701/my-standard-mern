const apiRouter = require('express').Router();

apiRouter.get('/data', (req, res) => {
  return res.status(200).send({ success: true });
});

module.exports = apiRouter;
