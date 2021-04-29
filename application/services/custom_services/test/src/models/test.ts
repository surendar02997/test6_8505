
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const testSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   name: String,
   email: String
})

const testModel = mongoose.model('test', testSchema, 'test');
export default testModel;
