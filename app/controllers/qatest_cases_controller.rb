class QatestCasesController < ApplicationController
  unloadable

  before_filter :authorize, :except => [:index, :userindex, :new, :create]
  accept_api_auth :userindex

  def index
  end

  def userindex
    @users =  User.preload(:email_address).limit(20).to_a

    respond_to do |format|
      format.html {
        render :layout => !request.xhr?
      }
      format.api
    end
  end

  def edit
  end

  def update
  end

  def destroy
  end
end
