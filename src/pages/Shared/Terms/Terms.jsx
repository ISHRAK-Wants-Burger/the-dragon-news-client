import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Our terms and condition</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, inventore numquam eaque corporis iusto beatae error sapiente consectetur rerum nam alias repellendus nemo fugit, atque exercitationem esse, laudantium dolorum accusantium?</p>
            <p>Go back to <Link to="/register">Register</Link> </p>
        </div>
    );
};

export default Terms;