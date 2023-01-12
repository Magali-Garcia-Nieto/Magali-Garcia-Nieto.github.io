import React, { Component } from 'react';
import ImgProfile from "../images/Magalí.png";





class Profile extends Component {
    render() {
        return (
         
            <div class="row">
                <div class="col-sm-12 col-md-12 col-lg-4">

                          <img src={ImgProfile} alt="Magalí García Nieto" ></img> 
                      
                </div>
            </div>
            
            
        );
    }
}

export default Profile;
