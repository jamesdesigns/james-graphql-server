# James GraphQL Server
The SpaceX datastore currently contains 25 clothing items(Hoodies and T-shirts) sold by SpaceX. 

#### Clone the james-graphql-server repository by clicking the 'Clone or Download' button.

## Setup
Make sure you are in the new cloned project (james-graphql-server).
```bash
 cd james-graphql-server
```

#### Run the following commands
```bash
 npm install
 npm run dockerStart
 npm run deploy
 npm run load
 npm run start
 ```

Enter localhost:4000 in the browser to test mutations

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

2. Find/Read product(s) by type. For example, find the type of product that is a "Hoodie". (You can also search for a "T-shirt")
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

3. Find/Read any products by price. For example, find product(s) by price of $40. 
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

1. Create a product - (Enter the following information in the data:)
```bash
mutation createProduct { 
    createProduct(
        data: { 
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

2. Delete a product - (Enter an existing id and delete the product)
```bash
mutation deleteProduct { 
    deleteProduct(where: {
    id: "_ENTER_EXISTING_ID_"
 })
 {
    id
 }
}
```

3. Update a product - (Enter an existing id and add the following information in the data:)
```bash
mutation updateProduct { 
    updateProduct(where: {
    id: "_ENTER_EXISTING_ID_"
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

