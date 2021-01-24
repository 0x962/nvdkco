class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.string :slug, unique: true, requried: true
      t.string :title
      t.string :meta_title
      t.string :meta_description
      t.string :meta_keywords
      t.string :meta_author

      t.bigint :view_count

      t.timestamps
    end
  end
end
