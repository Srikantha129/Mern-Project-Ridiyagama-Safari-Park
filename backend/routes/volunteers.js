const router = require("express").Router();
let volunteer = require("../models/volunteer");


router.route("/add").post((req,res)=>{

const name = req.body.name;
const email = req.body.email;
const pnumber = Number(req.body.pnumber);

app.post("/", function(req, res){
let newVolunteer = new volunteer({

    name:name,
    email:email,
    pnumber:pnumber
})

    newVolunteer.save().then(()=>{
        res.json("Your Request sent Successfully!!We will contact you as soon as possible through email.")
    }).catch((err)=>{
        console.log(err);
    })
})

})

module.exports = router;