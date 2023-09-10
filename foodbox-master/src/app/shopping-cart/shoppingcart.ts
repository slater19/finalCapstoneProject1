export class shoppingCart {
    [x: string]: any;
    constructor(
        public productId = 0,
        public productName = '',
        public productCat  = '',
        public productPrice = 0,
        public productImg  = ''
    ) {
        
    }
}