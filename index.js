const { prisma } = require('./generated/prisma-client')

// A `main` function so that we can use async/await
async function main() {

  // Create a New Product to add to the inventory
  const newProduct = await prisma.createProduct({
    name: 'BigHoodie', price: 40, color: 'Green', size: 'XL'
  })
  console.log(`Created new product: ${newProduct.name}, ${newProduct.size}, ${newProduct.price}, ${newProduct.color} (ID: ${newProduct.id})`)

  // Read all existing products and print them out to the console
  const allProducts = await prisma.products()
  console.log(allProducts)

  // Read the previously created user from the database and print their posts to the console
  // const postsByUser = await prisma
  //   .user({ email: "james@prisma.io" })
  //   .posts()
  // console.log(`All posts by that user: ${JSON.stringify(postsByUser)}`)

}

main().catch(e => console.error(e))