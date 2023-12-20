class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity_response
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found_response

    skip_before_action :authorize
    
    #GET /me
    def show
        user = User.find(session[:user_id])
        render json: user, include: :recipes, status: :ok
    end

    #POST /signup
    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def user_recipes
        #render users with n or more recipes
        users = User.all
        filtered_users = users.filter {|user| user.recipes.length >= params[:n].to_i}
        render json: filtered_users, status: :ok
    end

    private
    def unprocessable_entity_response invalid
        render json: {errors: [invalid.message]}, status: :unprocessable_entity
    end

    def record_not_found_response invalid
        render json: {errors: [invalid.message]}, status: :not_found
    end

    def user_params
        params.permit(:username, :password, :password_confirmation, :name)
    end
end
