const router = require('express').Router();
let userModel = require('../models/user.reg.model');
const bcrypt = require('bcrypt');


router.route('/data').get((req,res) => {
    userModel.find() 
    .then(data => res.json(data))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').get((req,res) => {
    userModel.findById(req.params.id)
    .then(data => res.json(data))
    .catch(err => res.status(400).json('Error: ' + err));
});


        router.route('/createUser').post( async (req,res) => {
            const firstName = req.body.firstName;
            const lastName = req.body.lastName;
            const email = req.body.email;
            const more = req.body.more;
            const password = req.body.password;

            const newUserData = new userModel({
                firstName,
                lastName,
                email,
                password,
                more 
            });

        const crypted = await bcrypt.hash(newUserData.password, 10).then(cryptedPassword => {
                return cryptedPassword;
        }).catch(err => err);
        
        newUserData.password = crypted;

         newUserData.save()
        .then(()=> console.log('it works'))
        .catch(err => res.status(400).json('Reg Error'+ err));
});















module.exports = router;
