export class Product {
    constructor(
        public image:string,
        public name:string,
        public code:string,
        public available:Date,
        public rate:number,
        public price:number
    ){}
}
