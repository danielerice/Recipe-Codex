class RecipesController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity_response
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found_response

    #before_action :authorize

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
        recipe = Recipe.find(params[:id])
        recipe.update(recipe_params)
        render json: recipe, status: :ok
    end

    #POST /recipes
    def create
        recipe = Recipe.create(recipe_params)
        render json: recipe, status: :created
    end

    #DELETE /recipes/:id
    def destroy
        recipe = Recipe.find(params[:id])
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
        params.permit(:name, :description, :user_id)
    end
end
