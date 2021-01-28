import mongoose from 'mongoose';
mongoose.connect("mongodb+srv://joshua:Cyberj12@cluster0.ttrwy.mongodb.net/user?retryWrites=true&w=majority")
.then(db => console.log('Connected Database'))
.catch(err => console.log(err));