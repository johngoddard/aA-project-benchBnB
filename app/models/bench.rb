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
end
