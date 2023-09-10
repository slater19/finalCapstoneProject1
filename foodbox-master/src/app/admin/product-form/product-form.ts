export class productform {
    [x: string]: any;
    constructor(
        public productId = 0,
        public productTitle = '',
        public productCat  = '',
        public productPrice = 0,
        public productImg  = ''
    ) {
        
    }
}
