class ThemesController < ApplicationController

  def index
    themes =  Theme.all.order(:id)
    render json: themes, status: :ok
  end

  def create
    newtheme = Theme.create!( dark: params[:dark] ,light: params[:light] ,bright: params[:bright] , transp: params[:certificate] )
    render json: newtheme, status: :created
  end

  def show
    theme = Theme.find_by!(id: params[:id])
    render json: theme, status: :ok
  end

  def update
    theme = Theme.find(params[:id])
    theme.update!(theme_params)
    render json: theme, status: :ok
  end

  def destroy
    theme = Theme.find(params[:id])
    theme.destroy!
    head :no_content
  end

  private

  def theme_params
      params.permit(:dark ,:id,:light ,:bright ,:transp)
  end

end



