const { prisma } = require('./generated/prisma-client')

// A `main` function so that we can use async/await
async function main() {

  // Create a New Product to add to the inventory
  // const newProduct = await prisma.createProduct({
  //   name: 'BigT', price: 25, color: 'Black', size: 'Large'
  // })
  // console.log(`Created new product: ${newProduct.name}, ${newProduct.size}, ${newProduct.price}, ${newProduct.color} (ID: ${newProduct.id})`)

  // Read all existing products and print them out to the console
  const allProducts = await prisma.products()
  console.log(allProducts)

  // Update a Products name 
  // const updateProduct = await prisma.updateProduct({
  //   where: { id: 'cjtrjb7wm001l08394kzc0d4c'},
  //   data: { name: 'BigHood' }
  // })

  // Delete a Product
  // const deleteProduct = await prisma.deleteProduct({ id: 'PRODUCT_ID'})
}

main().catch(e => console.error(e))