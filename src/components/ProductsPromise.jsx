let products =[
    {"id":"TPUI6", "categori":"TPU" ,"name":"TPU Iphone 6", "description":"Funda para IPH 6 de silicona", "price":"$1200"},
    {"id":"TPUIT6", "categori":"TPU" ,"name":"TPU Transparente Iphone 6", "description":"Funda para IPH 6 de silicona transparente", "price":"$1000"},
    {"id":"TPUI7", "categori":"TPU" ,"name":"TPU Iphone 7", "description":"Funda para IPH 7 de silicona", "price":"$1200"},
    {"id":"TPUIT7", "categori":"TPU" ,"name":"TPU transaprente Iphone 7", "description":"Funda para IPH 7 de silicona transparente", "price":"$1000"}

]

export const productsList = new Promise((resolve, reject) => {
    let condition = true
    setTimeout(()=>{

        if (condition) {
            resolve (products)
        }   else    {
            reject("error")
        }            
    }, 3000)

})