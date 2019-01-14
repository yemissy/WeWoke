class ArticlesController < ApplicationController
  before_action :set_article, only: [:show, :update, :destroy]

  # Get /new
  def new
    @wsj_resp = HTTParty.get('https://newsapi.org/v2/everything?q=blacklivesmatter&apiKey=72e67456d4fb4850837e259879ad46f5', :verify => false).parsed_response # <- not the actual url
    # binding.pry # will give you a debugger to mess with the wsj response
  end
  # GET /articles

  def index
    @articles = Article.all
    render json: @articles
  end

  # GET /articles/1
  def show
    render json: @article
  end

  # POST /articles
  def create
    @article = Article.new(article_params)

    if @article.save
      render json: @article, status: :created, location: @article
    else
      render json: @article.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /articles/1
  def update
    if @article.update(article_params)
      render json: @article
    else
      render json: @article.errors, status: :unprocessable_entity
    end
  end

  # DELETE /articles/1
  def destroy
    @article.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_article
      @article = Article.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def article_params
      params.require(:article).permit(:title, :story, :writer, :source, :publishedDate, :likes)
    end
end
