Redmine::Plugin.register :test_case_management do
  name 'Test Case Management plugin'
  author 'Rupesh J'
  description 'This is a plugin for Redmine, Provides functionality to manage test cases.'
  version '0.0.1'
  # url 'http://example.com/path/to/plugin'
  # author_url 'http://example.com/about'

  # project_module :test_case_management do
  #   permission :view_test_cases, { :qatest_cases => [:index, :userindex] }, :require => :member
  # end
  permission :view_test_cases, { :qatest_cases => [:index, :userindex] }, :public => :true
end
