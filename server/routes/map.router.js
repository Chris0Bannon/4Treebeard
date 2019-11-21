const express = require('express');
const pool = require('../modules/pool');
const {rejectUnauthenticated} = require('../modules/authentication-middleware');
const router = express.Router();


router.get('/', rejectUnauthenticated, (req, res) =>{
    const queryText = `SELECT "Location Name" 
FROM "map"
WHERE "id" =(SELECT "Map Location"
FROM "user"
WHERE "user".id =$1);`
pool.query(queryText, req.user.id)
.then(result => {
    res.send(result.rows);
})
.catch((error) => {
    res.sendStatus(500)
})
})


module.exports = router;