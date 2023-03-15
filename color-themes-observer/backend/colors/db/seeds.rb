# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Theme.create(name: 'default blue',
  darkest: 'hsla(210, 100%, 50%, 1)', 
  lightest: 'hsla(210, 100%, 21%, 1)', 
  brightest: 'hsla(210, 100%, 88%, 1)', 
  transparent: 'hsla(210, 100%, 64%, 0.2)' );

Theme.create(name: 'default green',
      darkest: 'hsla(136, 100%, 50%, 1)', 
      lightest: 'hsla(136, 100%, 21%, 1)', 
      brightest: 'hsla(136, 100%, 88%, 1)', 
      transparent: 'hsla(136, 100%, 64%, 0.2)' );

Theme.create(name: 'default purple',
      darkest: 'hsla(274, 100%, 50%, 1)', 
      lightest: 'hsla(274, 100%, 21%, 1)', 
      brightest: 'hsla(274, 100%, 88%, 1)', 
      transparent: 'hsla(274, 100%, 64%, 0.2)' );




