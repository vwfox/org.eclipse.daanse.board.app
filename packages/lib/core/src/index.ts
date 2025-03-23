
import {Container} from "inversify";
import {boot} from './bootstrap';
import type {ServiceI} from './api/ServiceI';

const container= new Container();


export {container,boot,ServiceI}
