class CreateColours < ActiveRecord::Migration[7.0]
  def change
    create_table :colours do |t|
      t.integer :dark
      t.integer :light
      t.integer :bright
      t.integer :transp

      t.timestamps
    end
  end
end
