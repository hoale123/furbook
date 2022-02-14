class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.string :profile_picture
      t.text :bio
      t.string :email
      t.string :phone_number
      t.string :birthdate

      t.timestamps
    end
  end
end
