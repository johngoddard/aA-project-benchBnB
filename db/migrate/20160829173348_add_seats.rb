class AddSeats < ActiveRecord::Migration
  def change
    add_column :benches, :num_seats, :integer, default: 4
  end
end
