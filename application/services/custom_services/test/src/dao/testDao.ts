import * as mongoose from 'mongoose';
import testModel from '../models/test';
import { CustomLogger } from '../config/Logger'


export class testDao {
    private test = testModel;
    constructor() { }
public GpDelete(testId, callback){
new CustomLogger().showLogger('info', 'Enter into testDao.ts: GpDelete')

this.test.findByIdAndRemove(testId).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from testDao.ts: GpDelete');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpSearch(testData, callback){
new CustomLogger().showLogger('info', 'Enter into testDao.ts: GpSearch')
let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;Object.entries(testData).forEach(
                        ([key,value]) => {
                            if(value !== ''){
                                andkey = key;
                                and_obj[andkey] = value;
                            }
                            else{
                                orkey = key;
                                or_obj[orkey] = { $ne: '' }
                            }
                        }
                    );;
;
this.test.find({$and: [
                        {
                            $or: [
                               or_obj
                            ]
                        },
                        and_obj
                    ]}).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from testDao.ts: GpSearch');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpUpdate(testData, callback){
new CustomLogger().showLogger('info', 'Enter into testDao.ts: GpUpdate')

this.test.findOneAndUpdate({ _id: testData._id }, testData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from testDao.ts: GpUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpGetAllValues(callback){
new CustomLogger().showLogger('info', 'Enter into testDao.ts: GpGetAllValues')

this.test.find().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from testDao.ts: GpGetAllValues');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpCreate(testData, callback){
new CustomLogger().showLogger('info', 'Enter into testDao.ts: GpCreate')
let temp = new testModel(testData);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from testDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpSearchForUpdate(testData, callback){
new CustomLogger().showLogger('info', 'Enter into testDao.ts: GpSearchForUpdate')

this.test.findOneAndUpdate({ _id: testData._id }, testData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from testDao.ts: GpSearchForUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpGetNounById(testId, callback){
new CustomLogger().showLogger('info', 'Enter into testDao.ts: GpGetNounById')

this.test.findById(testId).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from testDao.ts: GpGetNounById');
callback(result);
}).catch((error)=>{
callback(error);
});}


}