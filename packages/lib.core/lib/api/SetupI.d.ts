import { Container } from "inversify";
export interface SetupI {
    init(container: Container): any;
}
