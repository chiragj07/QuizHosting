const {Router} = require('express');
const router= Router();
const Kid =require('../model/userModel');
router.post('/', async (req,res) =>{
    const {name, wrongAns,createdAt}= req.body;
    console.log(req.body);
    try{
    const newKid = await Kid.create({
        name,
        wrongAns,
        createdAt
    })
    let dt = newKid.createdAt.toLocaleString(); 
    const kid ={
        name: newKid.name,
        wrongAns: newKid.wrongAns,
        createdAt:dt
    }

    res.status(200).send({kid})
}catch(err){
    res.status(500).send('some enternal error');
}})
module.exports=router;