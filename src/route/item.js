const { Router } = require("express")
const router = Router();

Products =[
{"id":1,"name":"shirts","price":2000},
{"id":2,"name":"shoes","price":3500},
{"id":3,"name":"pants","price":2055}
]

router.get('/',(req,res)=>{
    res.cookie('cookiename','this is some cookie from the server',{maxage:5000,signed:true});
    res.send(Products);
});

router.get('/:price',(req,res) => {
    const price = req.params.price;
     product = Products.find((p) => p.price == price)
     res.send(product)

}) 
router.post('/:price',(req,rec) =>{
    console.log(req.body)
    product.push(req.body);
    res.sendStatus(201);
    res.send(products);
})


module.exports = router;