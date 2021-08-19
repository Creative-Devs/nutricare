import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import CardGroup from 'react-bootstrap/CardGroup';
import './Programs.css';

class Programs extends React.Component {


    render() {

        return (
            <body>
                <h1> Welcome To Your NutriCare Diet Programs </h1>

                <CardGroup class="container">
                    <Row>
                        <Col xs={6} md={4}>
                            <Card style={{ backgroundColor: 'rgb(82, 197, 197)' }}
                                className="mb-2" border="light" style={{ width: '22rem' }}>

                                <Card.Title className='cardTitle'>Weight Loss Programs</Card.Title>


                                <Card.Body className='cardBody'>

                                    <Card.Img height="360px" width="300" variant="top" src="https://static.langimg.com/thumb/msid-73695030,imgsize-836732,width-700,height-525,resizemode-75/samayam-telugu.jpg" />

                                </Card.Body>

                            </Card>
                        </Col>

                        <Col xs={6} md={4}>
                            <Card height="300px" width="300" className="mb-2" border="light" style={{ width: '22rem' }}>

                                <Card.Title className='cardTitle'>Weight Stability Programs</Card.Title>

                                <Card.Body className='cardBody'>
                                    <Card.Img style={{ height: '22rem' }} variant="top" src="https://images.theconversation.com/files/340385/original/file-20200608-176571-19id8u7.jpg?ixlib=rb-1.1.0&rect=10%2C0%2C6699%2C4476&q=45&auto=format&w=926&fit=clip" />

                                </Card.Body>

                            </Card>
                        </Col>


                        <Col xs={6} md={4}>
                            <Card height="400px" width="300" className="mb-2" border="light" style={{ width: '22rem' }}>

                                <Card.Title className='cardTitle'>Weight Gain Programs</Card.Title>

                                <Card.Body className='cardBody'>

                                    <Card.Img height="360px" width="300" variant="top" src="https://www.verywellfit.com/thmb/3fxrd69WeZe92H25pgO-lm8MDLs=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/iStock-602331216-58daae465f9b584683646d9a.jpg" />
                                </Card.Body>

                            </Card>
                        </Col>
                    </Row>


                </CardGroup>

                <>

                    <br />
                    <br />

                    <div style={{ padding: '40px' }}>


                        <Col className='Sec1' >
                            <Row xs={6} md={3}>


                                <Card className='wLClass' id='Weight Loss Programs' border="info" style={{ width: '18rem' }}>
                                    <Card.Header>Weight Loss Programs
                                    </Card.Header>
                                    <Card.Body className='cardBody'>
                                        <Card.Title>Best overall</Card.Title>

                                        <Card.Img height="130px" width="50px" variant="top" src="https://domf5oio6qrcr.cloudfront.net/medialibrary/5905/c2b45cab-f19e-499d-bd19-4c72866502da.jpg" />
                                        <Card.Text>
                                            <br />
                                            - The Mediterranean diet:
                                            <br />
                                            A well-rounded Mediterranean diet should include plenty of fruits, vegetables, whole grains, nuts, seeds, proteins, and healthy fats.

                                            <br />
                                            <br />

                                            - Plant-based diet:
                                            <br />
                                            Plant-based diets encourage you to eat foods from plants, including fruits, vegetables, nuts, seeds, oils, and legumes.

                                            Unlike vegan or vegetarian diets, most plant-based diets don’t eliminate meat or animal products entirely.



                                        </Card.Text>
                                    </Card.Body>
                                </Card >
                                <br />

                                <Card className='wLClass' id='Weight Loss Programs' border="info" style={{ width: '18rem' }}>
                                    <Card.Header>Weight Loss Programs
                                    </Card.Header>
                                    <Card.Body className='cardBody'>
                                        <Card.Title> For diabetes
                                        </Card.Title>
                                        <Card.Img height="130px" width="50px" variant="top" src="https://domf5oio6qrcr.cloudfront.net/medialibrary/5905/c2b45cab-f19e-499d-bd19-4c72866502da.jpg" />
                                        <br />
                                        <Card.Text>
                                            <br />

                                            - Carb-restricted diet:
                                            <br />
                                            Carb-restricted diets are often recommended to help support blood sugar control and increase weight loss among those with type 2 diabetes.

                                            <br />
                                            <br />
                                            - Mayo Clinic diet:
                                            <br />
                                            The Mayo Clinic diet is an eating plan originally developed by experts at the Mayo Clinic, a nonprofit hospital system that’s considered to be a leader in medical research.





                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <br />

                                <Card className='wLClass' id='Weight Loss Programs' border="info" style={{ width: '18rem' }}>
                                    <Card.Header>Weight Loss Programs
                                    </Card.Header>
                                    <Card.Body className='cardBody'>
                                        <Card.Title>For Heart Health</Card.Title>


                                        <Card.Img height="130px" width="50px" variant="top" src="https://domf5oio6qrcr.cloudfront.net/medialibrary/5905/c2b45cab-f19e-499d-bd19-4c72866502da.jpg" />


                                        <Card.Text>
                                            <br />
                                            - DASH diet:
                                            <br />
                                            The Dietary Approaches to Stop Hypertension (DASH) diet is an eating plan intended to promote weight loss, reduce blood pressure levels, and protect against heart disease (34Trusted Source).

                                            The diet promotes nutritious foods like fruits, vegetables, lean proteins, and whole grains.

                                            Meanwhile, red meat and foods high in added sugar, salt, or fat are limited.

                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <br />
                                <br />

                            </Row>
                        </Col>
                    </div>
                </>
                <br />
                <br />
                <>

                    <section style={{ padding: '40px' }}>


                        <Col >
                            <Row xs={6} md={3}>
                                <Card className='wLClass' id='Weight Stability Programs' border="secondary" style={{ width: '18rem' }}>
                                    <Card.Header>
                                        Weight Stability Programs</Card.Header>
                                    <Card.Body className='cardBody'>
                                        <Card.Title>Intermittent fasting</Card.Title>

                                        <Card.Img height="130px" width="50px" variant="top" src="https://perfectweight.site/wp-content/uploads/2020/05/c118c3f9-ac0e-4944-9198-369b324416d5.jpg" />

                                        <Card.Text>
                                            <br />
                                            - Intermittent fasting restricts the time you’re allowed to eat, which is a simple way to reduce your calorie intake.
                                            This can lead to weight loss — unless you compensate by eating too much food during allowed eating periods.

                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <br />

                                <Card className='wLClass' id='Weight Stability Programs' border="secondary" style={{ width: '18rem' }}>
                                    <Card.Header>
                                        Weight Stability Programs</Card.Header>
                                    <Card.Body className='cardBody'>
                                        <Card.Title>Plant-based diets</Card.Title>

                                        <Card.Img height="130px" width="50px" variant="top" src="https://perfectweight.site/wp-content/uploads/2020/05/c118c3f9-ac0e-4944-9198-369b324416d5.jpg" />

                                        <Card.Text>
                                            <br />
                                            - Here are many types of vegetarianism, but most involve eliminating all meat, poultry, and fish. Some vegetarians may likewise avoid eggs and dairy.


                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <br />

                                <Card className='wLClass' id='Weight Stability Programs' border="secondary" style={{ width: '18rem' }}>
                                    <Card.Header>
                                        Weight Stability Programs</Card.Header>
                                    <Card.Body className='cardBody'>
                                        <Card.Title>Low-carb diets</Card.Title>

                                        <Card.Img height="130px" width="50px" variant="top" src="https://perfectweight.site/wp-content/uploads/2020/05/c118c3f9-ac0e-4944-9198-369b324416d5.jpg" />

                                        <Card.Text>
                                            <br />
                                            - Low-carb diets restrict your carb intake in favor of protein and fat.

                                            Some varieties reduce carbs more drastically than others. For instance, very-low-carb diets like the keto diet restrict this macronutrient to under 10% of total calories,
                                            compared with 30% or less for other types (18Trusted Source).
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <br />
                                <br />
                            </Row>
                        </Col>

                    </section>
                </>

                <br />
                <br />

                <>
                    <div style={{ padding: '40px' }}>

                        <Col>
                            <Row xs={6} md={3}>

                                <Card className='wLClass' id='Foods to gain weight' border="danger" style={{ width: '18rem' }}>
                                    <Card.Header>Foods to gain weight</Card.Header>
                                    <Card.Body className='cardBody'>
                                        <Card.Title> Milk</Card.Title>

                                        <Card.Img height="130px" width="50px" variant="top" src="https://i.pinimg.com/474x/6f/0c/1a/6f0c1ac05c7e256f89bc72d915e3bb11.jpg" />

                                        <Card.Text>
                                            <br />
                                            - Milk offers a mix of fat, carbohydrates, and proteins.

                                            It is also an excellent source of vitamins and minerals, including calcium.

                                            The protein content of milk makes it a good choice for people trying to build muscle.

                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <br />

                                <Card className='wLClass' id='Foods to gain weight' border="danger" style={{ width: '18rem' }}>
                                    <Card.Header>Foods to gain weight</Card.Header>
                                    <Card.Body className='cardBody'>
                                        <Card.Title>Protein shakes</Card.Title>

                                        <Card.Img height="130px" width="50px" variant="top" src="https://i.pinimg.com/474x/6f/0c/1a/6f0c1ac05c7e256f89bc72d915e3bb11.jpg" />

                                        <Card.Text>
                                            <br />
                                            -  Protein shakes can help a person to gain weight easily and efficiently. A shake is most effective at helping to build muscle if drunk shortly after a workout.

                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <br />

                                <Card className='wLClass' id='Foods to gain weight' border="danger" style={{ width: '18rem' }}>
                                    <Card.Header>Foods to gain weight</Card.Header>
                                    <Card.Body className='cardBody'>
                                        <Card.Title>Rice</Card.Title>

                                        <Card.Img height="130px" width="50px" variant="top" src="https://i.pinimg.com/474x/6f/0c/1a/6f0c1ac05c7e256f89bc72d915e3bb11.jpg" />

                                        <Card.Text>
                                            <br />
                                            - A cup of rice contains about 200 caloriesTrusted Source, and it is also a good source of carbohydrates, which contribute to weight gain. Many people find it easy to incorporate rice into meals containing proteins and vegetables.

                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <br />
                                <br />

                            </Row>
                        </Col>

                    </div>

                    <style>
                        @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
                        @import url('https://fonts.googleapis.com/css2?family=Acme&family=Bahianita&family=Dancing+Script:wght@700&family=Fira+Sans+Condensed&family=Play&display=swap');
                    </style>

                </>
            </body>
        )
    }
}

export default Programs;
