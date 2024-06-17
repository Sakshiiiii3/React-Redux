import Home from "../components/Home";
import { connect } from "react-redux";
import {addToCart,removeToCart} from '../service/actions/actions'

const mapStateToProps = state =>(
    {
         
    }
)
const mapDispatchToProps = dispatch =>({
    addToCartHandler:data=>dispatch(addToCart(data)),
    removeToCartHandler : ()=>dispatch(removeToCart())
}) 
export default connect(mapStateToProps,mapDispatchToProps)(Home)