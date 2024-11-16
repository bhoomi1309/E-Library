const express=require('express');
const user=require('../models/userSchema');

const router=express.Router();

router.get('/users', async (req, res) => {
    const ans = await user.find();
    res.send(ans);
});
router.post('/auth/register', async (req, res) => {
    const newUser=new user({ ...req.body });
    await newUser.save();
    res.json({ message: 'User added successfully' });
});
router.post('/auth/login',async (req,res)=>{
    const checkUser=await user.findOne({email: req.body.Email});
    if(!checkUser){
        return res.json({
          success: false,
          message: "User doesn't exist! Please register first",
        });
    }
    if(checkUser.password!==req.body.Password){
        return res.json({
            success: false,
            message: "Incorrect password! Please try again",
        });
    }
    res.json({
        success: true,
        message: "Logged in successfully",
        user: {
          email: checkUser.email,
          name: checkUser.name,
          password: checkUser.password,
          phone:checkUser.phone,
          address:checkUser.address
        }
    });
})

module.exports=router;