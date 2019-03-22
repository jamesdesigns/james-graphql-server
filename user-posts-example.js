const { prisma } = require('./generated/prisma-client')

// A `main` function so that we can use async/await
async function main() {

  // myPosts = [{
  //   title: "Join SpaceX now and explore more exciting news"
  // }, {
  //   title: "Subscribe to SpaceX Weekly for great offers"
  // }]

  // Create a new user with a new post
  const newUser = await prisma
    .createUser({
      name: "Elon",
      email: "elon@gmail.io",
      posts: {
        create: [{
          title: "Join SpaceX now and explore more exciting news",
          comments: {
            create: [{bodyText:'I love the SpaceX program!'}, {bodyText:'Lets all fly to Mars'}]
          }
        }, {
          title: "Subscribe to SpaceX Weekly for great offers",
        }]
      },
    })
  console.log(`Created new user: ${newUser.name} (ID: ${newUser.id})`)

  // Read all users from the database and print them to the console
  // const allUsers = await prisma.users()
  // console.log(allUsers)

  // const allPosts = await prisma.posts()
  // console.log(allPosts)
}

main().catch(e => console.error(e))