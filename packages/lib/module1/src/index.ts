import type { Container } from "inversify";

class Module1 {
    private string = "Hello from module 1";

    constructor() {
        console.log("Module1 inited");
    }

    getString() {
        return this.string;
    }
}

const init = (container: Container) => {
    console.log('init pack1')
    const instance = new Module1();
    container.bind("Default").toConstantValue(instance);
}


export {
  init
}
