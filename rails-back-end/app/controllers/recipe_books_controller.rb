class RecipeBooksController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity_response
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found_response


    #GET /recipe_books
    def index
        render json: RecipeBook.all
    end
    
    #PATCH /recipe_book/:id
    def update
        recipe_book = RecipeBook.find(params[:id])
        recipe_book.update(recipe_book_params)
        render json: recipe_book, status: :ok
    end

    #POST /recipe_books
    def create
        recipe_book = RecipeBook.create!(recipe_book_params)
        render json: recipe_book, status: :created
    end

    #DELETE /recipe_book/:id
    def destroy
        recipe_book = RecipeBook.find(params[:id])
        recipe_book.destroy
        head :no_content
    end

    private
    def unprocessable_entity_response invalid
        render json: {errors: [invalid.message]}, status: :unprocessable_entity
    end

    def record_not_found_response invalid
        render json: {errors: [invalid.message]}, status: :not_found
    end

    def recipe_book_params
        params.permit(:name, :description)
    end
end
