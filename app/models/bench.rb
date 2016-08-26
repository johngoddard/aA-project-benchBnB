# == Schema Information
#
# Table name: benches
#
#  id          :integer          not null, primary key
#  description :text
#  lat         :float            not null
#  lng         :float            not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Bench < ActiveRecord::Base
  validates :lat, :lng, presence: true

  def in_bounds(bounds)
    puts " ---------------BOUNDS HERE --------------------"
    puts bounds
    puts self
    if(self.lat <= bounds['northEast']['lat'].to_f && self.lat >= bounds['southWest']['lat'].to_f && self.lng <= bounds['northEast']['lng'].to_f && self.lng >= bounds['southWest']['lng'].to_f)
      return true
    end
    false
  end
end
