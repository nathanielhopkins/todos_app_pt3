class User < ApplicationRecord
  attr_reader :password 
  validates :username, :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  after_initialize :ensure_session_token

  def ensure_session_token
    self.session_token = SecureRandom::urlsafe_base64
  end
end