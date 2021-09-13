class Api::StepsController < ApplicationController
  def index
    
  end
  
  def show
    
  end

  def create
    
  end

  def update
    
  end

  def destroy
    
  end

  private

  def step_params
    params.require(:step).permit(:title, :body, :done)
  end

end