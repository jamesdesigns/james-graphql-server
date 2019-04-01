# SpaceX Product Prisma Server

To start the server:
 1. npm dockerStart
 2. npm run deploy

Enter localhost:4466 in the browser to test mutations



## Routes

#### Get All Products

* "/" - Get all products in the database

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

#### Update Product by id

* "/:id/update" - Update a product with the specific id

#### Delete Product by id

* "/:id/delete" - Delete a product with the specific id