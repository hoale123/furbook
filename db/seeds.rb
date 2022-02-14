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
User.create(username:"hoa", password:  "1234567", profile_picture:Faker::Avatar.image, bio: "Full Stack Dev",email: "hoa.com", phone_number: "1-482-384-2958", birthdate: "1999-01-04" )
User.create(username:"hello", password:  "1234567", profile_picture:Faker::Avatar.image, bio: "Full Stack Dev",email: "hello.com", phone_number: "1-482-384-2958", birthdate: "1999-01-04" )

# p1 = 
Post.create(text: Faker::Quotes::Shakespeare.hamlet_quote, user_id: 1)
Post.create(text: Faker::Quotes::Shakespeare.hamlet_quote, user_id: 2)


# c1 = 
Comment.create(body:"Nice Post", user_id: 1, post_id: 1)
Comment.create(body:"Love it", user_id: 2, post_id: 2)


Friend.create(user_id: 1, username: "Shawn Choi",bio: "I am Rob", email: "abd@defg.com", phone_number: "1-482-384-2958", birthdate: "1999-01-04",profile_picture:"https://i.pinimg.com/originals/c8/81/d3/c881d387a7c49114fd20521c2077a94b.png")

Friend.create(user_id: 1, username: "Natali Portman", bio: "Portman", email: "hi@jklm.com", phone_number: "1-283-492-4859", birthdate: "1989-09-07", profile_picture:"https://i.pinimg.com/originals/05/13/64/051364959f28400a106c55481005854d.jpg")

Friend.create(user_id: 2, username: "Lady GaGa",bio: "I am GAGA", email: "ijk@lmno.com", phone_number: "1-293-392-4846", birthdate: "2000-09-10", profile_picture: "https://i.ytimg.com/vi/S7HnU_oNBw4/hqdefault.jpg")


# username== name, imageurl = profilepicture, add bio


puts "Done Seeding!"