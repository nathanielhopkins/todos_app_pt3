class Api::TodosController < ApplicationController

  def show
    render json: Todo.find(params[:id]), include: :tags
  end

  def index
    render json: Todo.all.where(user_id: current_user.id), include: :tags
  end

  def create
    @todo = current_user.todos.new(todo_params)
    if @todo.save
      render json: @todo, include: :tags
    else
      render json: @todo.errors.full_messages, status: 422
    end
  end

  def update
    @todo = current_user.todos.find(params[:id])
    if @todo.update(todo_params)
      render json: @todo, include: :tags
    else 
      render json: @todo.errors.full_messages, status: 422
    end
  end

  def destroy
    @todo = current_user.todos.find(params[:id])
    @todo.destroy
    render json: @todo, include: :tags
  end

  private
  def todo_params
    params.require(:todo).permit(:title, :body, :done, :user_id, tag_names: [])
  end
end