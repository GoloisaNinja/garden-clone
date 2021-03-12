# The name of the project: 
    GainfulGarden

# Names of the team members
    - Kat Sauma
    - Katrina Cloyd
    - Nicole Martin
    - KB Boyles

# A description of the project
    GainfulGarden is a place for new gardeners to search for plants, get information about how to grow them, save them to a wishlist to buy later, and save them to their My Garden space to track with a journal.

# The overall problem domain and how the project solves those problems
    As a new gardener, it can be tough to know where to start when looking to grow your food. GainfulGarden gives these beginner gardeners an easy way to get started by allowing searching/filtering plants that will grow well in their environment, tracking plants they want to buy, and taking notes on plants they own to refer back to later.

# Semantic versioning, beginning with version 1.0.0 and incremented as changes are made
    


# A list of any libraries, frameworks, or packages that your application requires in order to properly function
    1) react-toastify
    2) 
    3) 

# Instructions that the user may need to follow in order to get your application up and running on their own computer
    - npm i for dependencies

# Clearly defined API endpoints with sample responses
    - /auth/signup
    - /auth/signin
    - GET Endpoint notes for a single plant - /api/notes/:id
    - GET Endpoint all plants in my_garden - /api/my_garden
    - GET Endpoint wishlist page - /api/wishlist
    - POST Endpoint to add to wishlist - /api/wishlist
    - POST Endpoint to add to my_garden - /api/my_garden
    - POST to notes /api/notes
    - DELETE endpoint to remove a plant from my_garden - /api/my_garden/:id
    - DELETE endpoint to remove a plant from wishlist - /api/wishlist/:id
    - GET all edible plants filtered, search page default on mount - /api/edible_search
    - GET detailed information when clicking on a single plant - /api/plant_detail/:id
    - GET three filter options on search page, part of plant, is it a veg?, light range - /api/filtered_search
    - GET (input field) searching by common, family, or scientific name of entire API-- on search page - /api/name_search



# Clearly defined database schemas