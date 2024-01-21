const express=require("express");
const  router=express.Router();

const credential={
    email:"admin@gmail.com",
    password:"Admin123@"
}

// Home route
router.get('/', (req, res) => {
    
    let message = req.session.message
    req.session.message = ''
    if(req.session.user){
        res.redirect("/dashboard")
    }else{
        res.render('base', { title: "Login System",message } );
    }
});


// login user
router.post('/login',(req,res)=>{
    if(req.body.email == credential.email && req.body.password == credential.password){
        req.session.user = req.body.email;
        res.redirect('/dashboard')
    }else{
        req.session.message = 'invalid user'
        res.redirect("/")
    }

})
// rote for dashboard
router.get('/dashboard',(req,res)=>{
    if(req.session.user){
        res.render('dashboard',{user : req.session.user})
    }else{
        res.redirect("/")
    }
})

// route for logout
router.get('/logout',(req,res)=>{
    req.session.destroy()
    res.redirect("/")
})

module.exports=router;