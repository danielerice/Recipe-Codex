# Controller logic: fallback requests for React Router.
# Leave this here to help deploy your app later!
class FallbackController < ActionController::Base

  def index
    # React app index page
    render file: '/Users/danielrice/Development/code/phase-4/phase-4-project-dr/client/public/index.html'
  end
end
