# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'
puts "Seeding..."

u1 = User.create(username:"hoa", password:  "1234567", profile_picture:Faker::Avatar.image, bio: "Full Stack Dev" )

p1 = Post.create(text: Faker::Quotes::Shakespeare.hamlet_quote, user_id: User.all.sample.id)

c1 = Comment.create(body:"Nice Post", user_id: u1.id, post_id: p1.id)


puts "Done Seeding!"