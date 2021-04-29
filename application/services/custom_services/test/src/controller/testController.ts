import { Request, Response } from 'express';
import { testService } from '../service/testService';
import { CustomLogger } from '../config/Logger'
let test = new testService();

export class testController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
test.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into testController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from testController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
test.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into testController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from testController.ts: GpSearch');
    })}
public GpUpdate(req: Request, res: Response) {
test.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into testController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from testController.ts: GpUpdate');
    })}
public GpGetAllValues(req: Request, res: Response) {
test.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into testController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from testController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
test.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into testController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from testController.ts: GpCreate');
    })}


}