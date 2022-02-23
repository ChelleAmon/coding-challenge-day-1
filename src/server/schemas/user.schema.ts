import mongoose from "mongoose";
import type {User} from '../../shared/user.model.js';
const {Schema, model} = mongoose;
const opts = {toJSON: {virtuals: true}}

const userSchema = new Schema<User>({
    first_name: {type: String},
    last_name: {type: String},
    age: {type: Number},
}, opts)

userSchema.virtual('intro').get(function(this: User){
    return `${this.first_name} ${this.last_name} is ${this.age} years old.`
})

export const UserModel = model<User>('User', userSchema)


