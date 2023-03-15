class CreateThemes < ActiveRecord::Migration[7.0]
  def change
    create_table :themes do |t|
      t.string :name
      t.string :darkest
      t.string :lightest
      t.string :brightest
      t.string :transparent

      t.timestamps
    end
  end
end
