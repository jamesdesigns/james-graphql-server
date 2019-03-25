const { prisma } = require('./generated/prisma-client')
const { spacexproducts } = require('./data/spacexdata.js')

// A `main` function so that we can use async/await
async function main() {
    spacexproducts.forEach(async (product) => {
        const newProduct = await prisma.createProduct({
            name: product.name,
            price: product.price,
            color: product.color,
            size: product.size
        })
        console.log(`Created new product: ${newProduct.name} (ID: ${newProduct.id})`)
    })
    spacexproducts.forEach(async (product) => {
        const updateProduct = await prisma.updateProduct({
            id: product.id,
            name: product.name,
            price: product.price,
            color: product.color,
            size: product.size
        })
        console.log(`Updated new product: ${updateProduct.name} (ID: ${updateProduct.id})`)
    } )
}

main().catch(e => console.error(e))