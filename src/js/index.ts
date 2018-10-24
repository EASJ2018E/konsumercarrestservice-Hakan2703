import axios, {
    AxiosResponse,
     AxiosError} from "../../node_modules/axios/index";

     //http://rest-pele-easj-dk.azurewebsites.net/api/Cars

     interface Icar {
         model: string;
         vendor: string;
         price: number;
     }