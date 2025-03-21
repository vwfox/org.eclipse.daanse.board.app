import {inject, injectable, multiInject, tagged} from "inversify";
import {ServiceI} from "./api/ServiceI";


@injectable()
export class RootService{

    private readonly services:ServiceI[];

    constructor(@multiInject('Service') @tagged('immediate', true) private readonly _services: ServiceI[]) {
        this.services = _services;
    }


    activate(){
        if(this.services){
            for (const service of this.services ){
                service.activate();
            }
        }
    }

}
