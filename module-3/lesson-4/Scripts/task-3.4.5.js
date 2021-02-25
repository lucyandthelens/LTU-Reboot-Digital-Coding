const favouriteRecipe = { recipeTitle : 'Spaghetti Bolognese',
servings: 6,
ingredients: [
    '1 tbsp olive oil',
    ' 500g mince beef',
    'tomato passata',
    'onions',
    'garlic',
    'mushrooms',
    'peppers',
    'basil',
    'mixed herbs'
],
directions: ['Make Bolognese sauce',
'step 2',
'step 3'
]
}

letsCook: function() {
    console.log( "I'm hungry, let's cook" + favouriteRecipe.recipeTitle );
}

favouriteRecipe.letsCook();


