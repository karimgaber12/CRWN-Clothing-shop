const INITIAL_STATE = {
    sections: [
        {
            title: 'hats',
            imageUrl: 'https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?cs=srgb&dl=pexels-lumn-322207.jpg&fm=jpg',
            id: 1,
            linkUrl: 'shop/hats'
          },
          {
            title: 'jackets',
            imageUrl: 'https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?cs=srgb&dl=pexels-pixabay-325876.jpg&fm=jpg',
            id: 2,
            linkUrl: 'shop/jackets'
          },
          {
            title: 'sneakers',
            imageUrl: 'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?cs=srgb&dl=pexels-terje-sollie-298863.jpg&fm=jpg',
            id: 3,
            linkUrl: 'shop/sneakers'
          },
          {
            title: 'womens',
            imageUrl: 'https://images.pexels.com/photos/1127000/pexels-photo-1127000.jpeg?cs=srgb&dl=pexels-evg-kowalievska-1127000.jpg&fm=jpg',
            size: 'large',
            id: 4,
            linkUrl: 'shop/womens'
          },
          {
            title: 'mens',
            imageUrl: 'https://images.pexels.com/photos/581087/pexels-photo-581087.jpeg?cs=srgb&dl=pexels-francesco-paggiaro-581087.jpg&fm=jpg',
            size: 'large',
            id: 5,
            linkUrl: 'shop/mens'
          }
     
        ]
  };
  
  const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  
  export default directoryReducer;