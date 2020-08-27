class PostsController < ApplicationController
  def index
    @posts = Post.all  # 1番目のレコードを@postに代入
  end

  def create
    Post.create(content: params[:content])
    redirect_to action: :index
  end
  
  def checked
    post = Post.find(prams[:id])
    if post.checked
      post.update(checked: false)
    else
      post.update(checked: true)
    end

    item = Post.find(prams[:id])
    render json:{post: item}
  end

end