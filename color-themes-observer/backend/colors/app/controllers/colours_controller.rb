class ColoursController < ApplicationController

  def index
    colors =  Colour.all.order(:id)
    render json: colors, status: :ok
  end

  def create
    newColour = Colour.create!( dark: params[:dark] ,light: params[:light] ,bright: params[:bright] , transp: params[:certificate] )
    render json: newColour, status: :created
  end

  def show
    colour = Colour.find_by!(id: params[:id])
    render json: colour, status: :ok
  end

  def update
    colour = Colour.find(params[:id])
    colour.update!(colour_params)
    render json: colour, status: :ok
  end

  def destroy
    colour = Colour.find(params[:id])
    colour.destroy!
    head :no_content
  end

  private

  def colour_params
      params.permit(:dark ,:id,:light ,:bright ,:transp)
  end
end
