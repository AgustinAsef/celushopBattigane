let products =[
    {"id":"TPUI6", "categori":"TPU" , "class":"Silicona", "name":"TPU Iphone 6","color":"Negro", "description":"Funda para IPH 6 de silicona Negra", "img":"https://i.ibb.co/7QRGsMZ/tpu-Iph6-Negra.png" ,"price":"$1200"},
    {"id":"TPUIT6", "categori":"TPU" ,"class":"Silicona", "name":"TPU Transparente Iphone 6","color":"Transparente", "description":"Funda para IPH 6 de silicona transparente","img":"", "price":"$1000"},
    {"id":"TPUI7", "categori":"TPU", "class":"Silicona", "name":"TPU Iphone 7","color":"Negro", "description":"Funda para IPH 7 de silicona","img":"", "price":"$1200"},
    {"id":"TPUIT7", "categori":"TPU" ,"class":"Silicona", "name":"TPU transaprente Iphone 7","color":"Transparente", "description":"Funda para IPH 7 de silicona transparente","img":"", "price":"$1000"},
    {"id":"CABLEIPH1M", "categori":"CABLE","class":"Cable","name":"Cable IPH de 1m","color":"Blanco", "description":"Cable para IPH de 1 metro","img":"", "price":"$1500"},
    {"id":"CABLEIPH2M", "categori":"CABLE","class":"Cable","name":"Cable IPH de 2m","color":"Blanco", "description":"Cable para IPH de 2 metro","img":"", "price":"$2000"},

]

export const productsList = new Promise((resolve, reject) => {
    let condition = true
    setTimeout(()=>{

        if (condition) {
            resolve (products)
        }   else    {
            reject("error")
        }            
    }, 2000)

})