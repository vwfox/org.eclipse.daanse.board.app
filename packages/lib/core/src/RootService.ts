/*********************************************************************
 * Copyright (c) YYYY Contributors to the Eclipse Foundation.
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 * Contributors:
 *   Name (Company) - description
 **********************************************************************/


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
