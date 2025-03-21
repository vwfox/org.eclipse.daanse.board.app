import {container} from "lib.core";
import {RootService} from "./RootService";

const boot = async (listOfPackages:string[])=> {


    for (const pack of listOfPackages){
        try{
          /* @vite-ignore */
          let {init} = await import(pack);
          await init(container);

        }catch (e){
            console.warn(`error on init Package ${pack}`);
            console.warn(e);
        }
    }
    container.bind<RootService>(RootService).toSelf().inSingletonScope();
    const rs = container.get<RootService>(RootService);
    rs.activate();


}
export {boot}
