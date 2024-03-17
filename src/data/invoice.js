export const invoice = {
    id:10,
    name:'Componente PC',
    client:{
        name:'Pepe',
        lastName:'Doe',
        address:{
            country:'USA',
            city:'Los Angeles',
            street: 'One Street',
            number:12
        }
    },
    company:{
        name:'New Egg',
        fiscalNumber:12334455
    },
    items:[
        {
            product:'CPU intel i7',
            price:299,
            quantity:1
        },
        {
            product:'Corsair Keyboard Mecanico',
            price:150,
            quantity:1
        },
        {
            product:'Asus XP',
            price:111,
            quantity:3
        }
    ]
}