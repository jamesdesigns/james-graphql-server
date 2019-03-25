const { prisma } = require('./generated/prisma-client')

// A `main` function so that we can use async/await
async function main() {

  // Create a new product called `Big Hoodie`
  const newProduct = await prisma.createProduct({ name: 'Big Hoodie' })
  console.log(`Created new product: ${newProduct.name} (ID: ${newProduct.id})`)

  // Read all users from the database and print them to the console
  const allProducts = await prisma.products()
  console.log(allProducts)

  const user = await prisma
  .product({ id: 'cjsqtbyhu002o0839lmodshr9' })
  console.log(product)

  const productsCalledBigHoodie = await prisma
  .products({
    where: {
      name: 'Big Hoodie'
    }
  })ß
  console.log(productssCalledBigHoodie)

  const updatedProduct = await prisma
  .updateProduct({
    where: { id: 'cjsqtzafr003u0839o2yw0kzf' },
    data: { name: 'Biggie' }
  })
  console.log(updatedProduct)

  const deletedProduct = await prisma
  .deleteProduct({ id: 'cjsqtf58800370839sihzdlpz' })
  console.log(deletedProduct)
}

main().catch(e => console.error(e))