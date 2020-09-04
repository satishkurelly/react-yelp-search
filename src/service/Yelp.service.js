// Yelp Service Call 
//apiKey from https://www.yelp.com/developers/v3/manage_app;
const yelpApiKey = 'RgpQIFgkESkDJbLSL-g8OJCjQVBQzxXHo74TIunrduVgn5eD6AvK40IZkGhN_ocAPubI1bBHgr01VGlJcxWsjx0nNSk00D5cttB2SodhjqTIBeCh6ACruu8B4IFRX3Yx';

const yelpService = {
  searchBusinessOnYelp(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {       
      headers: { 
        Authorization: `Bearer ${yelpApiKey}`
      },

    }).then( (res) => {
      return res.json();

    }).then( (jsonResponse) => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(( (business) => {
          return {
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count,
          };
        }));
      }
    })
  },
  
  getBusinessReviewOnYelp(businessId) {
    let url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/${businessId}/reviews`;
    return fetch(url, {       
      headers: { 
        Authorization: `Bearer ${yelpApiKey}`
      },

    }).then( (res) => {
      return res.json();

    }).then( (jsonResponse) => {
      if (jsonResponse.reviews) {
        return jsonResponse.reviews.map(( (review) => {
          return {
            id: review.id,
            userName: review.user.name,
            rating: review.rating
          };
        }));
      }
    })
  }
};

export default yelpService;

