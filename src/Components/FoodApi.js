// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import axios from 'axios';
// import Card from 'react-bootstrap'



// class FoodApi extends React.Component {

//   constructor(props) {
//     super(props)
//     this.state = {
//         label: '',
//         img: '',
//         calories: '',
//       errorMsg: 'bad response',
//       displayErr: false,
//       showCard: false
//     }
//   }
//   getRecipeData = async (event) => {
//     event.preventDefault();
//     let foodName = event.target.food.value;
//     console.log(foodName);
//     let Url = `https://api.edamam.com/search?app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_API_KEY}&q=${foodName}&format=json`;

//     try {
//       let RecipeResult = await axios.get(Url)

//       this.setState(
//         {
//           label: RecipeResult.data[0].label,
//           img: RecipeResult.data[0].img,
//           calories: RecipeResult.data[0].calories,
//           showCard: true

//         }
//       )

//     }


//     catch {
//       this.setState({
//         displayErr: true,
//         showCard: false
//       })
//     }

//   }

//   render() {
//     return (
//       <>
//         <h1>Food Explorer</h1>
//         <form onSubmit={this.getRecipeData}>
//           <input type='text' placeholder='Enter Food' name='food' />
//           <button type='submit'>Explore!</button>
//         </form>

//         {this.state.showCard &&
//                     <Card style={{ width: '18rem' }}>
//                     <Card.Img variant="top" src={this.state.img} />
//                     <Card.Body>
//                       <Card.Title>{this.state.label}</Card.Title>
//                       <Card.Text>
//                        {this.state.calories}
//                       </Card.Text>
//                     </Card.Body>
//                   </Card>
//                 }
//       </>
//     )
//   }
// }


// export default FoodApi;