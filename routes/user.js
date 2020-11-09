const router = require('express').Router();
let userModel = require('../model/user.reg.model');


router.route('/data').get((req,res)=>{
    userModel.find() 
    .then(data => res.json(data))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').get((req,res) => {
    userModel.findById(req.params.id)
    .then(data => res.json(data))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/add').post((req,res)=>{
    const name = req.body.name;
    const description = req.body.description;

    const newUserData = new userModel({
       name,
       description 
    });

    newUserData.save()
    .then(()=> res.json('user added'))
    .catch(err => res.status(400).json('Error'+ err));
});



router.route('/update/:id').post((req,res)=>{
    userModel.findById(req.params.id)
    .then(data => {
        data.name = req.body.name;
        data.description = req.body.description;

        data.save()
        .then(()=> res.json('user updated'))
        .catch(err => res.status(400).json('Error'+ err));
    })

    .catch(err => res.status(400).json('Error'+ err));
});



router.route('/:id').delete((req,res)=>{
    userModel.findByIdAndDelete(req.params.id)
    .then(()=> res.json('user has been deleted'))
    .catch(err=>res.status(400).json('Eror: '+err))
})




module.exports = router;
