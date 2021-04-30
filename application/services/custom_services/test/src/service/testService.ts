import { Request, Response } from 'express';
import {testDao} from '../dao/testDao';
import { CustomLogger } from '../config/Logger'
let test = new testDao();

export class testService {
    
    constructor() { }
    
    public GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into testService.ts: GpDelete')
     const  testId = req.params.id;
     test.GpDelete(testId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from testService.ts: GpDelete')
         callback(response);
         });
    }
public GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into testService.ts: GpSearch')
     const  testData = req.query;
     test.GpSearch(testData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from testService.ts: GpSearch')
         callback(response);
         });
    }
public GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into testService.ts: GpUpdate')
     const  testData = req.body;
     test.GpUpdate(testData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from testService.ts: GpUpdate')
         callback(response);
         });
    }
public GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into testService.ts: GpGetAllValues')
     
     test.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from testService.ts: GpGetAllValues')
         callback(response);
         });
    }
public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into testService.ts: GpCreate')
     const  testData = req.body;
     test.GpCreate(testData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from testService.ts: GpCreate')
         callback(response);
         });
    }


}