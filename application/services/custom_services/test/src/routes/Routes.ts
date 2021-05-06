import { Request, Response, NextFunction } from "express";
import { testController } from '../controller/testController';


export class Routes {
    private test: testController = new testController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/test/get/update').put(this.test.GpSearchForUpdate);
app.route('/test/:id').delete(this.test.GpDelete);
app.route('/test/get/search').get(this.test.GpSearch);
app.route('/test').put(this.test.GpUpdate);
app.route('/test').get(this.test.GpGetAllValues);
app.route('/test').post(this.test.GpCreate);
app.route('/test/:id').get(this.test.GpGetNounById);
     }

}