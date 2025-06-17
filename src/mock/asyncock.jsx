const productos=[
    {
        id:'01',
        name:'Curso Pasteleria',
        description:'Aprende a preparar deliciosos postres y dulces tradicionales en nuestro curso de pastelería. Desde bizcochos y tartas hasta macarons, dominarás técnicas básicas y decoraciones creativas. Ideal para todos los niveles, solo necesitas ganas de aprender y disfrutar del arte de la repostería. ¡Endulza tu vida y sorprende con tus propias creaciones!',
        stock:20,
        price:25500,
        category:'nuevos',
        img:'https://picsum.photos/200'
    },
    {
        id:'02',
        name:'Curso Cocina Italiana',
        description:'Descubre los sabores auténticos de Italia en nuestro curso de cocina italiana. Aprende a preparar pasta, salsas, risottos y más, con técnicas tradicionales y trucos culinarios. Ideal para todos los niveles, solo necesitas ganas de probar y disfrutar de la verdadera gastronomía italiana. ¡Lleva el sabor de Italia a tu hogar!',
        stock:25,
        price:79999,
        category:'ofertas',
        img:'../random-1.png'
    },
    {
        id:'03',
        name:'Curso de comida Asiatica',
        description:'Explora los sabores vibrantes de Asia en nuestro curso de cocina asiática. Aprende a preparar platos como sushi, fideos, curries y más, con técnicas auténticas y fáciles de seguir. Perfecto para todos los niveles, solo necesitas ganas de experimentar y disfrutar de la gastronomía oriental. ¡Sorprende con sabores únicos y exóticos!',
        stock:10,
        price:130000,
        category:'mas vendidos',
        img:'https://picsum.photos/206'
    },
    {
        id:'04',
        name:'Comidas vegetariana',
        description:'Descubre recetas saludables y deliciosas en nuestro curso de cocina vegana. Aprende a preparar platos nutritivos, sánguches, smoothies y postres, con ingredientes fáciles y técnicas sencillas. Ideal para todos los niveles, solo necesitas ganas de comer bien y cuidar tu salud. ¡Cocina vegana y llena tu vida de sabor!',
        stock:12,
        price:18000,
        category:'mas vendidos',
        img:'https://picsum.photos/207'
    },
]


export const getProducts = () =>{
    let error = false
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            if(error){
                reject('error')
            }else{
                resolve(productos)
            }
        },3000)
    })
}
export const getOneProduct = (id) =>{
    let error = false
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            if(error){
                reject('error')
            }else{
                let product= productos.find((prod)=> prod.id === id)
                resolve(product)
            }
        },3000)
    })
}