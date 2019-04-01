# SpaceX Prisma Server
The SpaceX datastore contains 25 items. This file can be found in the folder seed/spacexdata.json file.

#### Clone the SpaceX Repository:
https://github.com/jamesdesigns/james-graphql-server

## Setup
```bash
cd 
 ``` 

#### Run the following commands
```bash
 npm install
 npm run dockerStart
 npm run deploy
 npm run start
 ```

Enter localhost:4000 in the browser to test mutations

## Seed
This runs the script that loads the data
```bash
npm run load
```

## 3 Query Resolvers
1. Find/Read all products
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

2. Find/Read all products by type (name, color, or size). For example, Find all products that contain "Hoodies".
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
                id
                name
            }
        }
    }
    }
```

3. Find/Read all products by price. For example, find product by price of $40. 
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
                id
                name
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
    id: "_ENTER_ID_"
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
    id: "_ENTER_ID_"
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
    name
 }
}
```

