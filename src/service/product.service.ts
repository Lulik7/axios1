import {httpService} from "./https.service.ts";

const productEntpoint="products";

const productService={
    findAll:async()=>{
        const{data}=await httpService.get(productEntpoint);
        return data;
    }
}
export default productService;