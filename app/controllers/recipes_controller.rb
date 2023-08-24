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
        recipe = Recipe.find(params[:id])
        # if recipe_params[:name].length>0 and recipe_params[:directions].length>0
        #     recipe.update(recipe_params)
        #     render json: recipe, status: :ok
        # else
        #     render json: {errors: "Name and Directions can't be blank"}, status: :unprocessable_entity
        # end
        recipe.update!(recipe_params)
    end

    #POST /recipes
    def create
        recipe = Recipe.create!(recipe_params)
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
        params.permit(:name, :directions, :user_id, :recipe_book_id, :id)
    end
end
