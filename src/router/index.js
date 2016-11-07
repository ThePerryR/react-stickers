import express from 'express';


const router = express.Router();

function allRoutes(req, res, next, markup = '') {
  res.render('app.ejs', {
    markup,
    css: '',
    classNames: '',
    is: JSON.stringify({})
  });
}

router.get('/', allRoutes);
module.exports = router;
