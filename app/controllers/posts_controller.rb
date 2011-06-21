class PostsController < ApplicationController
  respond_to :json
  
  def index
    @posts = Post.all
    
    respond_with @posts
  end

  def show
    @post = Post.find(params[:id])
    
    respond_with @post
  end

  def create
    @post = Post.new(params.except(:action, :controller))

    respond_to do |format|
      if @post.save
        format.json { render :json => @post, :status => :created, :location => @post }
      else
        format.json { render :json => @post.errors, :status => :unprocessable_entity }
      end
    end
  end

  def update
    @post = Post.find(params[:id])
    
    respond_to do |format|
      if @post.update_attributes(params.except(:id, :action, :controller, :created_at, :updated_at))
        format.json { head :ok }
      else
        format.json { render :json => @post.errors, :status => :unprocessable_entity }
      end
    end
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy

    respond_to do |format|
      format.json  { head :ok }
    end
  end
end
