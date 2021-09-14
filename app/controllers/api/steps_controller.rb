class Api::StepsController < ApplicationController
  def index
    @steps = Todo.find(params[:todoId]).steps
    render json: @steps
  end

  def create
    @step = Step.new(step_params)
    
    if @step.save 
      render json: @step
    else 
      render json: @step.errors.full_messages, status: 422
    end
  end

  def update
    @step = Step.find(params[:id])
    if @step
      @step.update(step_params)
      render json: @step
    else
      render json: { message: 'not found', status: 404 }
    end
  end

  def destroy
    @step = Step.find(params[:id])
    @step.destroy
    render json: @step
  end

  private

  def step_params
    params.require(:step).permit(:title, :body, :done, :todoId)
  end

end