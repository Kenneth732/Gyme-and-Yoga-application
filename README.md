# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...


 npx create-react-app client --use-npm

 rails s

 npm start --prefix client


 gem install foreman


In the root directory, create a file Procfile.dev and add this code:

web: PORT=4000 npm start --prefix client
api: PORT=3000 rails s

 foreman start -f Procfile.dev


 rails g serializer director

 rails g serializer director_movie


 rails g serializer review

rails g controller Sessions --no-test-framework

rails g resource user username password_digest --no-test-framework

rails g resource user username password_digest:integer --no-test-framework

rails g serializer user

rails g controller Sessions --no-test-framework

rails g controller Users --no-test-framework

rails g serializer workout