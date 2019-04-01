# SpaceX Product Prisma Server
The SpaceX datastore contains 25 items. This file can be found in the folder seed/spacexdata.json file.

## To start the server:
 1. npm install
 2. npm dockerStart
 3. npm run deploy

Enter localhost:4466 in the browser to test mutations

## 3 Query Resolvers
1. Read all products
```bash
query allProducts { 
    products { 
        id 
        name 
        price 
        color 
        size 
        imagelink 
      } 
    }
```

2. Find and Read all products by type. For example, Read all products that are "Hoodies".
```bash
query findProductByType { 
    product(where: { id: "1" }) {
        name
    }
    productsConnection(where: {
        name_contains: "Hoodie"
    })
    {
        edges {
            node {
                name
            }
        }
    }
    }
```

3. Find and Read all products by price. For example, find product by price of $40. 
```bash
query findProductByPrice { 
    product(where: { id: "1" }) {
        price
    }
    productsConnection(where: {
        price: 40
    })
    {
        edges {
            node {
                price
            }
        }
    }
    }
```

## 3 Mutation Resolvers

1. Create a product
```bash
mutation createProduct { createProduct(data: { 
    name: "Musk T-shirt",
    price: 30,
    color: "Navy Blue",
    size: "XL",
    imagelink: "https://product-image.png"
    }
)
 {
    id
    name
    price
    color
    size
    imagelink
 }
}
```

2. Delete a product
```bash
mutation deleteProduct { 
    deleteProduct(where: {
    id: "cjtxvlli2048808392ept1mhp"
 })
 {
    id
 }
}
```

3. Update a product
```bash
mutation updateProduct { 
    updateProduct(where: {
    id: "cjtxuchtd042h08396zz023mm"
},
data: {
    name: "Musk Track Jacket",
    price: 30,
    color: "Light Gray",
    size: "Large",
    imagelink: "https://product-image-update.png"
})
 {
    id
 }
}
```

