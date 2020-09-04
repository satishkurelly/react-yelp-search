/* The purpose of the Business component is to represent how
** a business ( a restaurant) in Ravenous will be formatted and styles. 
*/
import React from 'react';
import './Business.css';
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Yelp from '../../service/Yelp.service.js';

class Business extends React.Component {

  constructor(props) {
    super(props);
   
    this.state = {
      reviews: []
    };

  }

  
  getReviewsFromYelp(id) {
    debugger;
    console.log(id);
    Yelp.getBusinessReviewOnYelp(id)
    .then( (reviews) => {
      this.setState({ reviews: reviews })
    })

  }

  render(){
    
    // const {business} = this.props;

    return (
      <Card className="Business" >
        <Card.Img className="image-container" variant="top" src={this.props.business.imageSrc} />
        <Card.Body>
          <Card.Title className="card-title">{this.props.business.name} </Card.Title>
         
        </Card.Body>
        <ListGroup >
          <ListGroupItem>
              <p> {this.props.business.address} </p>
              <p>{this.props.business.city}</p> 
              <p> {this.props.business.state} {this.props.business.zipCode} </p>
              </ListGroupItem>
          <ListGroupItem>
              <Row>
                <Col>             
                  <h3 > <small>Rating: </small> {this.props.business.rating} </h3>
                </Col>
                <Col>
                <p> <small>Review Count: </small>{this.props.business.reviewCount} </p>
                </Col>
              </Row>
         
          </ListGroupItem>
          <ListGroupItem> </ListGroupItem>
        </ListGroup>
     
        <Card.Body className="card-actions">
        <a href="self" onClick={() => this.getReviewsFromYelp(this.props.business.id)}>Reviews</a>

          {/* <Card.Link onClick={this.getReviewsFromYelp} href="self">Reviews</Card.Link> */}
        </Card.Body>
      </Card>
      // <div className="Business">
      //   <div className="image-container">
      //     <img src={this.props.business.imageSrc} alt=''/>
      //   </div>
      //   <h2> {this.props.business.name} </h2>
      //   <div className="Business-information">
      //     <div className="Business-address">
      //       <p> {this.props.business.address} </p>
      //       <p> {this.props.business.city} </p>
      //       <p> {this.props.business.state} {this.props.business.zipCode} </p>
      //     </div>
      //     <div className="Business-reviews">
      //       <h3> {this.props.business.category} </h3>
      //       <h3 className="rating"> {this.props.business.rating} </h3>
      //       <p> {this.props.business.reviewCount} </p>
      //     </div>
      //   </div>
      // </div>
    );
  }
}

export default Business;
