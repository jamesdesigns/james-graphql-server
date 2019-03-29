const fs = require('fs')
const { GraphQLClient } = require('graphql-request')

const client = new GraphQLClient('http://localhost:4466')

const mutation = `mutation createProduct(
    $name: String,
    $price: Float,
    $color: String,
    $size: String
) {
    createProduct(data: {
      name: $name
      price: $price
      color: $color
      size: $size
    })
    {
      id
    }
  }
`

const sampleFiles = ['spacexdata.json']

async function main(inputFile) {
  const content = fs.readFileSync(`./seed/${inputFile}`)
  const allProduct = JSON.parse(content)

  allProduct.forEach(async item => {
    const variables = {
        name: item.name,
        price: item.price,
        color: item.color,
        size: item.size,
      }
    
      await client
        .request(mutation, variables)
        .then(data => console.log(data))
        .catch(err => console.log(`${err}`))
  })
  
}

for (let fileName of sampleFiles) {
    main(fileName).catch(e => console.error(e))
}
