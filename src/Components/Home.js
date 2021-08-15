import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardGroup from 'react-bootstrap/CardGroup';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import './Home.css';


// import HealthyRecipes from './src/images/HealthyRecipes.jpg' // relative path to image 

// import logo from './logo.png' // relative path to image 

// class Nav extends Component { 
//     render() { 
//         return ( 
//             <img src={logo} alt={"logo"}/> 
//         )  
//     }
// }

const arr = [
    'Primary',
    'Secondary',
    'Success',
    'Danger',
    'Warning',
    'Info',
    'Light',
    'Dark',
]

class Home extends React.Component {


    render() {
        return (
            <section>
                <img height="400px" width="1300" src="https://img5.goodfon.com/wallpaper/nbig/7/1e/yoga-pose-relax.jpg"></img>

                <p class='welcoming'>
                    <h1> Welcome to NUTRICARE </h1>
                    <h3>Get into a healthy lifestyle with an easy-to-follow plan.</h3>
                </p>

                <Button class="btn"> GET STARTED </Button>


                <Container>
                    <figure>
                        {/* <img  height="300px" width="400" src='https://healthyhealthfullifestyle.com/wp-content/uploads/2016/06/Purchased-from-123rf-IMG_2260-2442-800x416.jpg'/> */}
                        <figcaption class='healthy-living'>
                            <h2>
                                What is healthy living?
                            </h2>

                            "Healthy living" to most people means both physical and mental health are in balance or functioning well together in a person. In many instances, physical and mental health are closely linked, so that a change (good or bad) in one directly affects the other. Consequently, some of the tips will include suggestions for emotional and mental "healthy living."
                        </figcaption>
                    </figure>
                </Container>


                <Carousel style={{ fontSize: '25px', backgroundColor: "#333", width: "65%", textAlign: 'center', marginLeft: "18%" }}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://apollosugar.com/wp-content/uploads/2020/01/PCOS-Diet-Apollo-Sugar.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption className='carsouselInfo'>
                            <h3>WEIGHT MANAGEMENT</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://assets.sweat.com/html_body_blocks/images/000/011/922/original/PWR_at_Home_Workout_ena86967915ab4c3c11809ad2c17d9bd2c.jpg?1554678228"
                            alt="Second slide"
                        />

                        <Carousel.Caption className='carsouselInfo'>
                            <h3>DIET AND EXERCISE</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/2/14/0/FNK_Herbed-Chicken-Marsala_s4x3.jpg.rend.hgtvcom.966.725.suffix/1371614296995.jpeg"
                            alt="Third slide"
                        />

                        <Carousel.Caption className='carsouselInfo'>
                            <h3>Healthy Recipes</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://www.bulletproof.com/wp-content/uploads/2018/11/Depression-and-Keto_Take-mood-boosting-supplements--752x401.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption className='carsouselInfo'>
                            <h3>Vitamins & Supplements</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                <div>
                    <h3 className='healthyTips'> Health Tips for Healthy Living</h3>

                    <CardGroup class="container">
                        <Row>
                            <Col xs={6} md={4}>
                                <Card
                                    //                      bg={}
                                    // text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                                    className="mb-2" border="light" style={{ width: '22rem' }}>

                                    <Card.Img height="360px" width="300" variant="top" src="https://images.pexels.com/photos/1105166/pexels-photo-1105166.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                                    <Card.Body>
                                        <Card.Title className='cardTitle'>Diet and Nutrition</Card.Title>
                                        <br />
                                        <Card.Text className='cardText'>
                                            1- Eat three healthy meals a day (breakfast, lunch, and dinner).
                                            <br />
                                            <br />

                                            2- The bulk of food consumption should consist of healthy foods, such as fruits, vegetables, whole grains, and fat-free or low-fat milk products.

                                            <br />
                                            <br />
                                            3- Incorporate lean meats, poultry, fish, beans, eggs, and nuts (with emphasis on beans and nuts) into a healthy diet.

                                        </Card.Text>
                                    </Card.Body>

                                </Card>
                            </Col>

                            <Col xs={6} md={4}>
                                <Card height="300px" width="300" className="mb-2" border="light" style={{ width: '22rem' }}>
                                    <Card.Img variant="top" src="https://static.onecms.io/wp-content/uploads/sites/44/2017/12/28020846/yoga-102959762_1x1.jpg" />
                                    <Card.Body>
                                        <Card.Title className='cardTitle'>Physical activity and exercise</Card.Title>
                                        <Card.Text className='cardText'>
                                            <br />
                                            1- Regular fitness can help chronic arthritis sufferers improve their capacity to perform daily activities.
                                            <br />
                                            <br />

                                            2- Regular exercise can help increase self-esteem and self-confidence, decrease stress and anxiety, enhance mood, and improve general mental health.

                                            <br />
                                            <br />

                                            3- Regular exercise can help control body weight and in some people cause loss of fat.


                                        </Card.Text>
                                    </Card.Body>

                                </Card>
                            </Col>


                            <Col xs={6} md={4}>
                                <Card height="400px" width="300" className="mb-2" border="light" style={{ width: '22rem' }}>
                                    <Card.Img height="360px" width="300" variant="top" src="https://www.geisinger.org/-/media/OneGeisinger/Images/ghs/health-and-wellness/Wellness-Articles/2019/2019-3-anti-smoking-web.jpg?w=0&h=0&as=1&hash=D31A7F07D88B934CDEDF13F3448B9707EB0534F7" />
                                    <Card.Body>
                                        <Card.Title className='cardTitle'>Avoid tobacco use</Card.Title>
                                        <Card.Text className='cardText'>
                                            <br />
                                            1- Stop smoking tobacco; start to stop today (it takes about 15 years of nonsmoking behavior to achieve a "normal" risk level for heart disease for those that smoke).

                                            <br />
                                            <br />

                                            2- Pregnant women who smoke are more likely to deliver babies with low birth weight.

                                            <br />
                                            <br />

                                            3- Stop using chewing tobacco to avoid oral cancers.

                                        </Card.Text>
                                    </Card.Body>

                                </Card>
                            </Col>
                        </Row>


                    </CardGroup>

                    <style>
                        @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
                    </style>

                    <style>
                        @import url('https://fonts.googleapis.com/css2?family=Anton&family=Fira+Sans:ital@1&display=swap');
                    </style>

                    <style>
                        @import url('https://fonts.googleapis.com/css2?family=Anton&family=Fira+Sans:ital@1&family=Teko:wght@500&display=swap');
                    </style>    


                </div>
            </section>
        )
    }

}


export default Home;