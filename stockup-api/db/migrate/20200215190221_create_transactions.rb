class CreateTransactions < ActiveRecord::Migration[6.0]
  def change
    create_table :transactions do |t|
      t.string :symbol
      t.integer :shares
      t.decimal :price
      t.bigint :user_id

      t.timestamps
    end
  end
end
