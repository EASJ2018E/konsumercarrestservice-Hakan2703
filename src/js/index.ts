import axios, {
    AxiosResponse,
     AxiosError} from "../../node_modules/axios/index";

     //http://rest-pele-easj-dk.azurewebsites.net/api/Cars

     interface Icar {
         model: string;
         vendor: string;
         price: number;
     }

     let divElement : HTMLDivElement = <HTMLDivElement> document.getElementById("content");

    let buttonElement : HTMLButtonElement = <HTMLButtonElement> document.getElementById("getAllButton")
    buttonElement.addEventListener("click",showAllCars);

    function showAllCars():void {
        let uri : string = "http://rest-pele-easj-dk.azurewebsites.net/api/Cars"
axios.get<Icar[]>(uri)
.then(function(response: AxiosResponse<Icar[]>):void{

    let result : string = "<ol>"
    response.data.forEach((car : Icar) => {
        result += "<li>"+ car.model + " " + car.vendor + " " + "price:" + car.price.toString() + "</li>"
    });
result += "<ol>"
divElement.innerHTML = result;

}
)
.catch(function(error : AxiosError): void{
    if (error.response) {
        divElement.innerHTML = error.message;
    }
}))


    }