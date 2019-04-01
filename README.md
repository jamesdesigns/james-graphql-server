# SpaceX Product Prisma Server

To start the server:
 1. npm dockerStart
 2. npm run deploy

Enter localhost:4466 in the browser to test mutations

#### 3 Queries
1. Read all products
query allProducts { products { id name price color size imagelink } }
2. 

#### 3 Mutations

1. Create a product
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

2. Delete a product
mutation deleteProduct { deleteProduct(where: {
    id: "__ENTER_ID__"
})
 {
    id
 }
}

3. Update a product
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


#### Get Product by Name

* "/name/:name" - Get a product by specific name

#### Get Product by Size
The following sizes are case sensitive. 

* "/size/:size" - Get a product by size (XL, Large, Medium, Small)


#### Create New Product

* "/create" - Add a new product

To add a new product in Postman use the following format:

```bash 
name: product name,
price: product price,
color: product color,
size: product size
```

