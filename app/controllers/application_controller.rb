class ApplicationController < ActionController::API
  include ActionController::Cookies
  wrap_parameters format: []

  before_action :authorize

  def authorize
    return render json: { errors: ["Not authorized"] }, status: :unauthorized unless session.include? :user_id
  end

end
