# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'
puts "Seeding..."
User.destroy_all
Post.destroy_all
Comment.destroy_all
# u1 = 
User.create(username:"Rabbit", password:  "1234567", profile_picture:"https://as2.ftcdn.net/v2/jpg/01/96/45/69/1000_F_196456983_N0gdnvEbyrcAmyTfJkgegBHstQffzdhC.jpg", bio: "i am cow",email: "hoa.com", phone_number: "1-482-384-2958", birthdate: "1999-01-04" )
User.create(username:"Cat", password:  "1234567", profile_picture:"https://img.freepik.com/free-vector/cute-cat-holding-fish-cartoon-icon-illustration-animal-food-icon-concept-isolated-flat-cartoon-style_138676-2171.jpg?w=740", bio: "i am cow",email: "hello.com", phone_number: "1-482-384-2958", birthdate: "1999-01-04" )
User.create(username:"giraffe", password:  "1234567", profile_picture:"https://img.freepik.com/free-vector/cute-giraffe-working-laptop_138676-3036.jpg?w=900&t=st=1649556996~exp=1649557596~hmac=23bcac3a7534e41097313ac114281577a6ee3dd317cc69c8d7aecbd8bb07b68e", bio: "i am cow",email: "hello.com", phone_number: "1-482-384-2958", birthdate: "1999-01-04" )
User.create(username:"TEAMB", password:  "1234567", profile_picture:"https://img.freepik.com/free-vector/cute-cat-holding-fish-cartoon-icon-illustration-animal-food-icon-concept-isolated-flat-cartoon-style_138676-2171.jpg?w=740", bio: "i am cow",email: "hello.com", phone_number: "1-482-384-2958", birthdate: "1999-01-04" )

# p1 = 
Post.create(text: "I am a Rabbit", user_id: 1)
Post.create(text: "Pur Pur Pur", user_id: 2)
Post.create(text: "I am a Giraffe", user_id: 3)



# c1 = 
Comment.create(body:"Nice Post", user_id: 1, post_id: 1,username:"Rabbit")
Comment.create(body:"Love it", user_id: 2, post_id: 2,username:"Cat")
Comment.create(body:"Hello everyone", user_id: 2, post_id: 2,username:"Giraffe")


Friend.create(user_id: 1, username: "Dog",bio: "I am  Dog", email: "dog.com", phone_number: "1-482-384-2958", birthdate: "1999-01-04",profile_picture:"https://media.istockphoto.com/photos/funny-west-highland-white-terrier-dog-decorated-with-photo-props-sits-picture-id1292884801?b=1&k=20&m=1292884801&s=170667a&w=0&h=L5QgEFpFN1be2Qx8Q9PUWolafU_ecaqYiNwga6eoqxs=")

Friend.create(user_id: 3, username: "Fish", bio: "I am Fish", email: "fish.com", phone_number: "1-283-492-4859", birthdate: "1989-09-07", profile_picture:"https://images.unsplash.com/photo-1535591273668-578e31182c4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmlzaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60")

Friend.create(user_id: 3, username: "Mike Pace ",bio: "i am cow", email: "Cow.com", phone_number: "1-293-392-4846", birthdate: "2000-09-10", profile_picture: "https://t3.ftcdn.net/jpg/01/09/82/00/240_F_109820094_ezCZ1ukWz5Yj6bFqcodftfbIGiyOQ7Xu.jpg")

Friend.create(user_id: 2, username: "madison sorah",bio: "i am cow", email: "Cow.com", phone_number: "1-293-392-4846", birthdate: "2000-09-10", profile_picture: "https://t3.ftcdn.net/jpg/01/09/82/00/240_F_109820094_ezCZ1ukWz5Yj6bFqcodftfbIGiyOQ7Xu.jpg")
Friend.create(user_id: 3, username: "Morgan Hobbs",bio: "i am cow", email: "Cow.com", phone_number: "1-293-392-4846", birthdate: "2000-09-10", profile_picture: "https://t3.ftcdn.net/jpg/01/09/82/00/240_F_109820094_ezCZ1ukWz5Yj6bFqcodftfbIGiyOQ7Xu.jpg")
Friend.create(user_id: 2, username: "Jack DeFeo",bio: "i am cow", email: "Cow.com", phone_number: "1-293-392-4846", birthdate: "2000-09-10", profile_picture: "https://t3.ftcdn.net/jpg/01/09/82/00/240_F_109820094_ezCZ1ukWz5Yj6bFqcodftfbIGiyOQ7Xu.jpg")
Friend.create(user_id: 3, username: "Dan Cheong",bio: "i am cow", email: "Cow.com", phone_number: "1-293-392-4846", birthdate: "2000-09-10", profile_picture: "https://t3.ftcdn.net/jpg/01/09/82/00/240_F_109820094_ezCZ1ukWz5Yj6bFqcodftfbIGiyOQ7Xu.jpg")
Friend.create(user_id: 1, username: "Joshua Schlueter",bio: "i am cow", email: "Cow.com", phone_number: "1-293-392-4846", birthdate: "2000-09-10", profile_picture: "https://t3.ftcdn.net/jpg/01/09/82/00/240_F_109820094_ezCZ1ukWz5Yj6bFqcodftfbIGiyOQ7Xu.jpg")
Friend.create(user_id: 3, username: "Nick Shephard",bio: "i am cow", email: "Cow.com", phone_number: "1-293-392-4846", birthdate: "2000-09-10", profile_picture: "https://t3.ftcdn.net/jpg/01/09/82/00/240_F_109820094_ezCZ1ukWz5Yj6bFqcodftfbIGiyOQ7Xu.jpg")
Friend.create(user_id: 3, username: "Kenneth Kim",bio: "i am cow", email: "Cow.com", phone_number: "1-293-392-4846", birthdate: "2000-09-10", profile_picture: "https://t3.ftcdn.net/jpg/01/09/82/00/240_F_109820094_ezCZ1ukWz5Yj6bFqcodftfbIGiyOQ7Xu.jpg")
Friend.create(user_id: 1, username: "Robert Gaspar",bio: "i am cow", email: "Cow.com", phone_number: "1-293-392-4846", birthdate: "2000-09-10", profile_picture: "https://t3.ftcdn.net/jpg/01/09/82/00/240_F_109820094_ezCZ1ukWz5Yj6bFqcodftfbIGiyOQ7Xu.jpg")
Friend.create(user_id: 3, username: "Lauren Hess",bio: "i am cow", email: "Cow.com", phone_number: "1-293-392-4846", birthdate: "2000-09-10", profile_picture: "https://t3.ftcdn.net/jpg/01/09/82/00/240_F_109820094_ezCZ1ukWz5Yj6bFqcodftfbIGiyOQ7Xu.jpg")
Friend.create(user_id: 2, username: "Zach Mommaerts",bio: "i am cow", email: "Cow.com", phone_number: "1-293-392-4846", birthdate: "2000-09-10", profile_picture: "https://t3.ftcdn.net/jpg/01/09/82/00/240_F_109820094_ezCZ1ukWz5Yj6bFqcodftfbIGiyOQ7Xu.jpg")
Friend.create(user_id: 3, username: "Christian Bradley",bio: "i am cow", email: "Cow.com", phone_number: "1-293-392-4846", birthdate: "2000-09-10", profile_picture: "https://t3.ftcdn.net/jpg/01/09/82/00/240_F_109820094_ezCZ1ukWz5Yj6bFqcodftfbIGiyOQ7Xu.jpg")
Friend.create(user_id: 1, username: "Dayton Houston",bio: "i am cow", email: "Cow.com", phone_number: "1-293-392-4846", birthdate: "2000-09-10", profile_picture: "https://t3.ftcdn.net/jpg/01/09/82/00/240_F_109820094_ezCZ1ukWz5Yj6bFqcodftfbIGiyOQ7Xu.jpg")
Friend.create(user_id: 3, username: "Eve Kozina",bio: "i am cow", email: "Cow.com", phone_number: "1-293-392-4846", birthdate: "2000-09-10", profile_picture: "https://t3.ftcdn.net/jpg/01/09/82/00/240_F_109820094_ezCZ1ukWz5Yj6bFqcodftfbIGiyOQ7Xu.jpg")
Friend.create(user_id: 3, username: "Peter Lamson",bio: "i am cow", email: "Cow.com", phone_number: "1-293-392-4846", birthdate: "2000-09-10", profile_picture: "https://t3.ftcdn.net/jpg/01/09/82/00/240_F_109820094_ezCZ1ukWz5Yj6bFqcodftfbIGiyOQ7Xu.jpg")
Friend.create(user_id: 3, username: "Akeem Smith",bio: "i am cow", email: "Cow.com", phone_number: "1-293-392-4846", birthdate: "2000-09-10", profile_picture: "https://t3.ftcdn.net/jpg/01/09/82/00/240_F_109820094_ezCZ1ukWz5Yj6bFqcodftfbIGiyOQ7Xu.jpg")
Friend.create(user_id: 3, username: "Hoa Le ",bio: "i am cow", email: "Cow.com", phone_number: "1-293-392-4846", birthdate: "2000-09-10", profile_picture: "https://t3.ftcdn.net/jpg/01/09/82/00/240_F_109820094_ezCZ1ukWz5Yj6bFqcodftfbIGiyOQ7Xu.jpg")
Friend.create(user_id: 2, username: "Babe Abulaila ",bio: "i am cow", email: "Cow.com", phone_number: "1-293-392-4846", birthdate: "2000-09-10", profile_picture: "https://t3.ftcdn.net/jpg/01/09/82/00/240_F_109820094_ezCZ1ukWz5Yj6bFqcodftfbIGiyOQ7Xu.jpg")
Friend.create(user_id: 1, username: "Bennett Upfield",bio: "i am cow", email: "Cow.com", phone_number: "1-293-392-4846", birthdate: "2000-09-10", profile_picture: "https://t3.ftcdn.net/jpg/01/09/82/00/240_F_109820094_ezCZ1ukWz5Yj6bFqcodftfbIGiyOQ7Xu.jpg")
Friend.create(user_id: 3, username: "Marcus Shimotsu",bio: "i am cow", email: "Cow.com", phone_number: "1-293-392-4846", birthdate: "2000-09-10", profile_picture: "https://t3.ftcdn.net/jpg/01/09/82/00/240_F_109820094_ezCZ1ukWz5Yj6bFqcodftfbIGiyOQ7Xu.jpg")
Friend.create(user_id: 3, username: "Nick Lunn",bio: "i am cow", email: "Cow.com", phone_number: "1-293-392-4846", birthdate: "2000-09-10", profile_picture: "https://t3.ftcdn.net/jpg/01/09/82/00/240_F_109820094_ezCZ1ukWz5Yj6bFqcodftfbIGiyOQ7Xu.jpg")
Friend.create(user_id: 3, username: "Wasanta Pruttisarikorn",bio: "i am cow", email: "Cow.com", phone_number: "1-293-392-4846", birthdate: "2000-09-10", profile_picture: "https://t3.ftcdn.net/jpg/01/09/82/00/240_F_109820094_ezCZ1ukWz5Yj6bFqcodftfbIGiyOQ7Xu.jpg")
Friend.create(user_id: 3, username: "Will Brennan(one eye)",bio: "i am cow", email: "Cow.com", phone_number: "1-293-392-4846", birthdate: "2000-09-10", profile_picture: "https://t3.ftcdn.net/jpg/01/09/82/00/240_F_109820094_ezCZ1ukWz5Yj6bFqcodftfbIGiyOQ7Xu.jpg")



# username== name, imageurl = profilepicture, add bio


puts "Done Seeding!"