const express = require('express');
const pool = require('../modules/pool');
const {rejectUnauthenticated} = require('../modules/authentication-middleware');
const router = express.Router();


router.get('/', rejectUnauthenticated, (req, res) =>{
    console.log('req.user.id=', req.user.id);
    
    const queryText = `SELECT "Location Name" 
FROM "map"
WHERE "id" =(SELECT "Map Location"
FROM "user"
WHERE "user".id = $1);`
pool.query(queryText, [req.user.id])
.then(result => {
    res.send(result.rows);
})
.catch((error) => {
    console.log('error in server side map GET route', error);
    res.sendStatus(error)
})
})


module.exports = router;