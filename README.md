# SpaceX Product Prisma Server
The SpaceX datastore contains 25 items. This can be found in seed/spacexdata.json file.

To start the server:
 1. npm dockerStart
 2. npm run deploy

Enter localhost:4466 in the browser to test mutations

## 3 Query Resolvers
1. Read all products
```bash
query allProducts { products { id name price color size imagelink } }
```
2. 

## 3 Mutation Resolvers

1. Create a product
```bash
mutation createProduct { createProduct(data: { 
    name: "BigHoodie",
    price: 40,
    color: "Red",
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
mutation deleteProduct { deleteProduct(where: {
    id: "__ENTER_ID__"
})
 {
    id
 }
}
```

3. Update a product
```bash
mutation updateProduct { updateProduct(where: {
    id: "__ENTER_ID__"
},
data: {
    name: "BigHoodie T-shirt",
    price: 30,
    color: "Gray",
    size: "Large",
    imagelink: "https://product-image-update.png"
})
 {
    id
 }
}
```

