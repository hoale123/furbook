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
Friend.destroy_all

# u1 = 
User.create(username:"Hoa", password:  "1234567", profile_picture:"https://img.freepik.com/free-vector/asian-boy-wears-red-jacket-cartoon-character-sticker_1308-80831.jpg?w=360", bio: "Full Stack Dev",email: "hoa.com", phone_number: "1-482-384-2958", birthdate: "1999-01-04" )
User.create(username:"Cat", password:  "1234567", profile_picture:"https://img.freepik.com/free-vector/cute-cat-holding-fish-cartoon-icon-illustration-animal-food-icon-concept-isolated-flat-cartoon-style_138676-2171.jpg?w=740", bio: "Full Stack Dev",email: "hello.com", phone_number: "1-482-384-2958", birthdate: "1999-01-04" )

# p1 = 
Post.create(text: "I am a human", user_id: 1)
Post.create(text: "Pur Pur Pur", user_id: 2)


# c1 = 
Comment.create(body:"Nice Post", user_id: 1, post_id: 1)
Comment.create(body:"Love it", user_id: 2, post_id: 2)


Friend.create(user_id: 1, username: "Dog",bio: "I am Dog", email: "dog.com", phone_number: "1-482-384-2958", birthdate: "1999-01-04",profile_picture:"https://media.istockphoto.com/photos/funny-west-highland-white-terrier-dog-decorated-with-photo-props-sits-picture-id1292884801?b=1&k=20&m=1292884801&s=170667a&w=0&h=L5QgEFpFN1be2Qx8Q9PUWolafU_ecaqYiNwga6eoqxs=")

Friend.create(user_id: 1, username: "Fish", bio: "I am Fish", email: "fish.com", phone_number: "1-283-492-4859", birthdate: "1989-09-07", profile_picture:"https://images.unsplash.com/photo-1535591273668-578e31182c4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmlzaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60")

Friend.create(user_id: 2, username: "Einstein",bio: "I am Einstein", email: "einstein.com", phone_number: "1-293-392-4846", birthdate: "2000-09-10", profile_picture: "https://images.unsplash.com/photo-1603349206295-dde20617cb6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZWluc3RlaW58ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60")


# username== name, imageurl = profilepicture, add bio


puts "Done Seeding!"