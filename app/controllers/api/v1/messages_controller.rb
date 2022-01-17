class Api::V1::MessagesController < ApplicationController
  before_action :set_message, only: %i[show update destroy]

  # GET /messages/random
  def messages_random
    @messages = Message.all

    @random = @messages[rand(0..(@messages.count-1))]

    render json: @random
  end


  # GET /messages
  def index
    @messages = Message.all

    render json: @messages
  end

  # GET /messages/1
  def show
    render json: @Message
  end

  # POST /messages
  def create
    @Message = Message.new(message_params)

    if @Message.save
      render json: @Message, status: :created, location: @Message
    else
      render json: @Message.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /messages/1
  def update
    if @Message.update(message_params)
      render json: @Message
    else
      render json: @Message.errors, status: :unprocessable_entity
    end
  end

  # DELETE /messages/1
  def destroy
    @Message.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_message
    @Message = Message.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def message_params
    params.fetch(:Message, {})
  end
end
