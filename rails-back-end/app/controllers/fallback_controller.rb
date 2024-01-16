# Controller logic: fallback requests for React Router.
# Leave this here to help deploy your app later!
class FallbackController < ActionController::Base

  def index
    # React app index page
    render file: '/Users/danielrice/Development/code/phase-4/Wine.0/client/public/index.html'
  end
end
