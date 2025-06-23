export const products = [
    {
        id: 1,
        name: 'Curso de Pastelería',
        category: 'pasteleria',
        description: 'Aprende a hacer pasteles.',
        price: 50,
        img: '/images/pasteleria.jpg',
    },
    {
        id: 2,
        name: 'Curso de Cocina Italiana',
        category: 'italiana',
        description: 'Disfruta de pasta y pizza.',
        price: 70,
        img: '/images/italiana.jpg',
    },
    {
        id: 3,
        name: 'Curso de Cocina Asiática',
        category: 'asiatica',
        description: 'Sabores auténticos de Asia.',
        price: 60,
        img: '/images/asiatica.jpg',
    },
    {
        id: 4,
        name: 'Curso de Cocina Vegetariana',
        category: 'vegetariana',
        description: 'Recetas saludables vegetarianas y veganas.',
        price: 55,
        img: '/images/vegetariana.jpg',
    },
];

export const categories = [...new Set(products.map(p => p.category))];