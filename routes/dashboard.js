const router = require('express').Router();
const jwtauthentication = require('../middlewares/jwt.auth');



router.get('/home', (req,res) => {
        console.log(req.headers);
})


// router.get('/home', jwtauthentication, async (req,res) => {
// try{
//     let user = await user.findById(req.user.id).select("password");
//     res.json(user);
// }catch (error){
//     console.error(error.message);
//     return res.status(500).send("Server error")
// }
// })

module.exports = router;