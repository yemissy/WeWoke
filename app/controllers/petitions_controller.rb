class PetitionsController < ApplicationController
  before_action :set_petition, only: [:show]
  before_action :authenticate_member, only: [:show, :create, :update, :destroy]

  # GET /petitions
  def index
    @petitions = Petition.all

    render json: @petitions
  end

  # GET /petitions/1
  def show
    render json: @petition
  end

  # POST /petitionss
  def create
    @petition = current_member.authored_petitions.new(petition_params)

    if @petition.save
      render json: @petition, status: :created, location: @petition
    else
      render json: @petition.errors, status: :unprocessable_entity
    end
  end

 # Get current_member/post
  def petitionsIcreated
    @petitions = current_member.authored_petitions

    render json: @petitions
  end

  # PATCH/PUT /petitions/1
  def update
    if @petition.update(petition_params)
      render json: @petition
    else
      render json: @petition.errors, status: :unprocessable_entity
    end
  end

  # DELETE /petitions/1
  def destroy
    @petition.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_petition
      @petition = Petition.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def petition_params
      params.require(:petition).permit(:title, :category, :detail, :summary, :organizer, :Organizers_Name)
    end
end
