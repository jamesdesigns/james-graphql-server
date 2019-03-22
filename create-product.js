const { prisma } = require('./generated/prisma-client')
const { spacexdata } = require('./data/spacexdata.js')

// A `main` function so that we can use async/await
async function main() {
    spacexdata.foreach(async (spacex) => {
        const newSpacex = await prisma
        .createProduct({
            name: spacex.name,
            price: spacex.price,
            color: spacex.color,
            size: spacex.size
          })    
    })
 console.log(`Created new product: ${newSpacex.name} (ID: ${newSpacex.id})`)

}

main().catch(e => console.error(e))