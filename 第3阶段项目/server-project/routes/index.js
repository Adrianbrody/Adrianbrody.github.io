var express = require('express');
var router = express.Router();
const {
  find
} = require('../db/db')
/* GET home page. */
//组件渲染
router.get('/play', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  let data = await find('teleplay');
  res.json(data)
});
router.get('/film', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  let data = await find('film');
  res.json(data)
});
router.get('/cartoon', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  let data = await find('cartoon');
  res.json(data)
});
router.get('/variety', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  let data = await find('variety');
  res.json(data)
});
router.get('/vaultos', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  let data = await find('vault');
  res.json(data)
});
router.get('/Movie_1', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  let data = await find('Movie_1');
  res.json(data)
});

//详情页渲染
router.get('/cha', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  let sid = req.query.nid
  // console.log(req.query)
  let data = await find('film', {
    id: sid
  });
  // console.log(data)
  res.json(data);
})
module.exports = router;