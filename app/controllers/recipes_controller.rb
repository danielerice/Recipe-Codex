class RecipesController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity_response
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found_response


    #GET /recipes
    def index
        recipes = Recipe.all
        render json: recipes, status: :ok
    end

    #GET /recipes/:id
    def show
        recipe = Recipe.find(params[:id])
        render json: recipe, status: :ok
    end

    #PATCH /recipes/:id
    def update
        user = User.find(session[:user_id])
        recipe = user.recipes.find(params[:id])
        recipe.update!(recipe_params)
        render json: recipe, status: :ok
    end

    #POST /recipes
    def create
        recipe = Recipe.create!(recipe_params)
        render json: recipe, status: :created
    end

    #DELETE /recipes/:id
    def destroy
        user = User.find(session[:user_id])
        recipe = user.recipes.find(params[:id])
        recipe.destroy
        head :no_content
    end

    private
    def unprocessable_entity_response invalid
        render json: {errors: [invalid.message]}, status: :unprocessable_entity
    end

    def record_not_found_response invalid
        render json: {errors: [invalid.message]}, status: :not_found
    end

    def recipe_params
        params.permit(:name, :directions, :user_id, :recipe_book_id, :id)
    end
end
