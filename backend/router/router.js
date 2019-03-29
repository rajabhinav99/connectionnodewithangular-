var express = require('express');
var router = express.Router();


const item = require('../model/items');

router.get('/', (req, res) => {
    res.send('Router Path..');
});

router.post('/item', (req, res, next) => {
    const newitem = new item({
        itemname: req.body.itemname,
        itemqty: req.body.itemqty,
        itembought: req.body.itembought
    });

    newitem.save((err, item) => {
        if (err)
            res.json(err);
        else
            res.json({ msg: 'Inserted..' });
    });
});

router.get('/item', (req, res, next) => {

    item.find((err, data) => {
        if (err)
            res.status(500).send(err);
        else
            res.status(200).send(data);
    });
});

router.delete('/item/:name', (req, res, next) => {

    var namereq = req.params.name.toString();
    item.deleteMany({ itemname: namereq }, (err, data) => {
        if (err)
            res.status(500).send(err);
        else
            res.status(200).send('Deleted..');
    });
});

router.put('/item/:name', (req, res, next) => {

    var namereq = req.params.name.toString();
    item.update(({ itemname: namereq }, { $set: { itemname: req.body.itemname, itemqty: req.body.itemqty, itembought: req.body.itembought } }), (err, data) => {
        if (err)
            res.status(500).send(err);
        else
            res.status(200).send('Updated..');
    });
});

module.exports = router;