import React, {Component} from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import Environmental from "./pages/Environmental";
import Account from "./pages/Account";
import Locations from "./pages/Locations";
import Products from "./pages/Products";
import Login from "./pages/Login";

class PaintballContainer extends Component {
    state = {
        currentPage: "Home"
    };
    handlePageChange = page => {
        this.setState({currenttPage: page});
    };
    renderPage = () => {
        if(this.state.currentPage === "Home"){
            return< Home/>
        }else if (this.state.currentPage === "Environmental"){
            return< Environmental/>
        }else if (this.state.currentPage === "Account"){
            return< Account/>  
        }else if (this.state.currentPage === "Locations"){
            return< Locations/>  
        }else if (this.state.currentPage === "Login"){
            return< Login/>
        }else if (this.state.currentPage === "Products"){
            return< Products/>
        render(){
            return(
                <div>
                    <NavTabs
                       currentPage = {this.state.currentPage}
                       handlePageChange = {this.handlePageChange}
                       />
                       {this.renderPage()}
                       </div>
            );
        }    
}export default PaintballContainer;