import mongoose, { Schema, model, models } from "mongoose"

const ContactSchema =  new Schema(
    {
      email: String,
      marke: String,
      modell: String,
      erstzulassung: String,
      treibstoff: String,
      getriebe: String, 
      kilometerstand: String,
      antrieb: String,
      fahrzeugzustand: String,
      ps: String,
      price: String,
      telefon: String,
      plz: String,
      tidStamp: {
        type: Date,
        default: Date.now,
    },
    },
  
  );
  
 const Contact = models.Contact || model('Contact', ContactSchema)

 export default Contact

