const router = require('express').Router()
const userCtrl = require('..//controllers/userCtrl')


// router.post('/register', (req,res) => {
//     res.json({msg: "Test Router"})
// })

router.post('/register', userCtrl.register)




module.exports = router