class Api::BillboardsController < ApplicationController
  def index
    render json: Billboard.all
  end

  def create
    billboard = Billboard.new(billboard_params)
    if billboard.save
      render json: billboard
    else
      render json: { errors: billboard.errors, status: :unprocessable_entity }
    end
  end

  def update
    billboard = Billboard.find(params[:id])
    billboard.update(billboard_params)
    render json: billboard
  end

  def destroy
      Billboard.find(params[:id]).destroy
      render json: { message: 'Song Deleted' }
  end
  
  private
    def billboard_params
      params.require(:billboard).permit(:song)
    end
end
