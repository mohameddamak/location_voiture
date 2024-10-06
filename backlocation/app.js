const express=require('express');
const mongoose =require("mongoose")
const dotenv =require('dotenv')
dotenv.config()
const app = express();
const cors=require('cors')
const userRouter = require("./routes/User.routes")
const reservationRouter=require("./routes/Reservation.route")
const marqueRouter=require("./routes/Marque.routes")
const voitureRouter=require("./routes/Voiture.routes")
const optionRouter=require("./routes/Option.routes")
const paymentRouter=require("./routes/Payment.routes")
//BodyParser Middleware
app.use(express.json()); 
app.use(cors());
mongoose.set("strictQuery", false);
// Connexion à la base données
mongoose.connect(process.env.DATABASE,{
useNewUrlParser: true,
useUnifiedTopology: true
})
.then(() => {console.log("Connexion à la base de données réussie");
}).catch(err => {
console.log('Impossible de se connecter à la base de données', err);
process.exit();
});
app.get("/",(req,res)=>{
res.send("bonjour");
});
app.use('/api/users', userRouter);
app.use('/api/reservation', reservationRouter);
app.use('/api/marque',marqueRouter);
app.use('/api/voiture', voitureRouter);
app.use('/api/option',optionRouter)
app.use('/api/payment',paymentRouter);

app.use(express.static('public'));
app.listen(process.env.PORT, () => {
console.log(`Server is listening on port ${process.env.PORT}`); });

