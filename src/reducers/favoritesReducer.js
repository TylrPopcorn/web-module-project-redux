const initialState = {
    favorites: [],
    displayFavorites: true,
}

const Favoritesreducer = (state = initialState, action) => {
    let switches = [
        ["", function () {

        }],
    ]

    for (let i = 0; i < switches.length; i++) {
        if (switches[i][0] === action) {
            switches[i][0]
        }
    }

    return state;
}

export default Favoritesreducer