class User < ActiveRecord::Base
  validates :username, :session_token, :password_digest, null: false
  validates :username, :session_token, uniqueness: true
  validates :password, length: { minimum: 4, allow_nil: true }

  after_initialize :ensure_session_token

  attr_reader :password

  def self.find_by_credentials(options)
    user = User.find_by(username: options[:username])
    return nil unless user && user.is_password?(options[:password])
    user
  end

  def password=(pw)
    @password = pw
    self.password_digest = BCrypt::Password.create(pw)
  end

  def is_password?(pw)
    BCrypt::Password.new(self.password_digest).is_password?(pw)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

end
