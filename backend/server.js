const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const { response } = require('express');
const stripe = require('stripe')('sk_test_51LmgSBIM6riO7MM6Dtbm1buzdGz7cREoF4oaq8hBbbNpEZvpG7H0Ju1WqmsUxQseDZprsGypmjLmqzgPhkwh7yBb00G7eI3Zsr');
const bcrypt = require('bcryptjs')
const jws = require('jsonwebtoken')


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


const successSchema = {
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    currency : {
        type : String,
        required : true
    },
    pnumber :{
        type : Number,
        
    },
    receipt : {
        type : String,
        
    },
    amount :{
        type : Number,
        required : true
    },
    address : {
       city : String,
       country : String,
       line1:String,
       line2:String,
       postal_code:String,
       state : String

        
    }
}

const loginSchema = {
    username : {
        type : String,
        required : true
    },

    name : {
        type : String,
        required : true
    },

    password :{
        type : String,
        required : true
        
    }

}


const adloginSchema = {
    username : {
        type : String,
        required : true
    },

    password :{
        type : String,
        required : true
        
    }

}

//database collection for successfull ticket buy
const Success = mongoose.model("Success",successSchema);

//database collection for login
const login = mongoose.model("login",loginSchema);

//database collection for adminlogin
const adlogin = mongoose.model("adlogin",adloginSchema);

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
                cb: docs.cbprice,
                la: docs.laprice,
                lc: docs.lcprice
                
            });
            console.log(docs);
        }
    })
})

app.get("/purchase",(req, res)=>{
    
            res.render("purchase");
            
        }
    )


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



//post staff data to database login collection(stafflogin),bcrypt used to encrypt user password
app.post("/add_staff", function(req, res){
    bcrypt.hash(req.body.password, 10, function(err, hashedPass){
        if(err){
            res.json({
                error: err
            })
        }
    
    
    let newlogin = new login({
    
        name:req.body.name,
        username:req.body.username,
        password:hashedPass
    })
    
        newlogin.save()
        .then(newlogin => {
            res.render('Success_staffadd.ejs')
        })
        .catch(error => {
            res.json({
                message: 'An error ocured!'
            })
            
        })
      
    })
})



//stafflogin
app.post("/staff_login", (req, res) => {
        const {

            username,
            password
        }=req.body;
       

        

        login.findOne({username:username})
        .then( Login => {
            if(Login){
                bcrypt.compare(password, Login.password, function(err, result) {
                    if(err) {
                        res.json({
                            error: err
                        })
                    }
                    if(result){
                        //let token = jwk.sign({name: Login.name}, 'verySecretValue' , {expiresIn: '24h'})
                        res.render('cards')//,token
                    }else{
                        res.render('Wrongdetails')
                    }

                    
                })
            }else{
                res.render('Nouser')
            }
            
        }) 
    })






//adminlogin
app.post("/admin_login", (req, res) => {
    const {

        username,
        password
    }=req.body;
   

    

    adlogin.findOne({username:username}, function (err, result) {
        if (username === result.username && password === result.password){
            res.render('Admin Dashboard')
        }else{
            console.log(err)
        }

})

})



//email search
    app.post("/purchasee", (req, res) => {
        const {

            search
        
        }=req.body;
       

        

        Success.findOne({email:search}, (err, result) => {
                if (err) {
                    console.log(err);
                }

                else {
                    res.render("result", {
                        nam: result.name,
                        emai: result.email,
                        currenc: result.currency,
                        receip: result.receipt,
                        amoun: result.amount,
                        addres: result.address
                    });
                }

            })

    })






    
// This is your test secret API key.

app.post('/webhook', express.json({type: 'application/json'}), (request, response) => {
    const event = request.body;
  
    // Handle the event
    switch (event.type) {
      case 'payment_intent.succeeded':
        const paymentIntent = event.data.object;
        //console.log(paymentIntent);
        //console.log(`PaymentIntent for ${paymentIntent.email} was successful!`);
        
        // Then define and call a method to handle the successful payment intent.
        // handlePaymentIntentSucceeded(paymentIntent);
        break;
      case 'payment_method.attached':
        const paymentMethod = event.data.object;
        // Then define and call a method to handle the successful attachment of a PaymentMethod.
        // handlePaymentMethodAttached(paymentMethod);
        break;
      case 'checkout.session.completed':
        const checkout = event.data.object;
        //console.log(checkout);
        //checout();
        
       /*function checout(req, res){
            let newSucces = new Success({
            
                name:checkout.customer_details.name,
                email:checkout.customer_details.email,
                pnumber:Number(checkout.customer_details.phone),
                amount:Number(checkout.amount_total/100),
                currency:checkout.currency,
                address:checkout.customer_details.address
            })
            
                newSucces.save();
              
            }*/
       
        // handlePaymentMethodAttached(paymentMethod);
            break;

        case 'charge.succeeded':
        const charge = event.data.object;
        //console.log(charge);
        charrge();

                function charrge(req, res){
                    let newSucces = new Success({
                    
                        name:charge.billing_details.name,
                        email:charge.billing_details.email,
                        //pnumber:Number(charge.billing_details.phone),
                        receipt:charge.receipt_url,
                        amount:Number(charge.amount/100),
                        currency:charge.currency,
                        address:charge.billing_details.address
                    })
                    
                        newSucces.save();
                    
                    }
            
        // Then define and call a function to handle the event charge.succeeded
        break;
        
      default:
        // Unexpected event type
        console.log(`Unhandled event type ${event.type}.`);
    }
  
    // Return a 200 response to acknowledge receipt of the event
    response.send();
  });










//app.use("/volunteer",volunteerRouter);








app.listen(port, () => {
console.log(`Server is running on port: ${port}`);
});

