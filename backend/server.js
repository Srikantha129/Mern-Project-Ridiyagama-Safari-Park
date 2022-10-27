const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");


require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);

const connection = mongoose.connection;
connection.once('open', () => {
console.log("MongoDB database connection established successfully");
})

app.use(bodyParser.urlencoded({extended: true}));

//data Schema for volunteer
const volunteerSchema = {
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    pnumber :{
        type : Number,
        required : true
    }
}
//data Schema for Entry ticket
const entryticketSchema = {
    ticket_name : {
        type : String,
        required : true
    },

    faprice :{
        type : Number,
        
    },

    fcprice :{
        type : Number,
       
    },

    laprice :{
        type : Number,
        
    },
    lcprice :{
        type : Number,
        
    }




}
//database collection for volunteer
const Volunteer = mongoose.model("Volunteer",volunteerSchema);

//database collection for Entry Ticket
const Entry_ticket = mongoose.model("Entry_ticket",entryticketSchema);

//const volunteerRouter = require("./routes/volunteers.js");

//app.get("/volunteer",function(req, res){
  //  res.sendFile(__dirname + "/routes/public/" + "Volunteersignup.html" );
//})

app.use(express.static("public"))
app.set('view engine','ejs')




app.get("/Booking",(req, res)=>{
    Entry_ticket.findOne({ticket_name:"Entry_Ticket"}, function (err, docs) {
        if (err){
            console.log(err)
        }
        else{
            res.render("Booking",{
                fa : docs.faprice,
                fc: docs.fcprice,
                la: docs.laprice,
                lc: docs.lcprice
            });
            console.log(docs);
        }
    })
})


app.get("/Tickets",(req, res)=>{
    Entry_ticket.findOne({ticket_name:"Entry_Ticket"}, function (err, docs) {
        if (err){
            console.log(err)
        }
        else{
            res.render("Tickets",{
                fa : docs.faprice,
                fc: docs.fcprice,
                la: docs.laprice,
                lc: docs.lcprice
            });
            console.log(docs);
        }
    })
})




//post volunteer data to database volunteer collection
app.post("/", function(req, res){
    let newVolunteer = new Volunteer({
    
        name:req.body.name,
        email:req.body.email,
        pnumber:Number(req.body.pnumber)
    })
    
        newVolunteer.save().then(()=>{
            res.render('Success.ejs')
            
        }).catch((err)=>{
            console.log(err);
        })
      
    })

    



//app.use("/volunteer",volunteerRouter);



app.listen(port, () => {
console.log(`Server is running on port: ${port}`);
});

