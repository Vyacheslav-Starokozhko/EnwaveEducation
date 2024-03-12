import React from 'react';
import {Counter} from "../components/Counter/Counter.tsx";
import TestForm from "../UI/Forms/TestForm/TestForm.tsx";
import OrderWork from "../sections/OrderWork/OrderWork";

const Home = () => {
    return (
        <div className="container">
            <OrderWork label= "Order Work"
                       description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eros nulla, sollicitudin in varius eu, fermentum in nibh. Phasellus laoreet efficitur tempus. Phasellus porttitor ante id odio laoreet luctus. Sed sit amet justo lacus. Curabitur vitae consectetur odio. Praesent vulputate nunc quis sapien posuere, sed molestie massa congue. Donec sed nisl odio."
                       form= {<TestForm/>}
                       titleForm="Please Order"
                       descriptionForm="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eros nulla, sollicitudin in varius eu, fermentum in nibh. Phasellus laoreet efficitur tempus. Phasellus porttitor ante id odio laoreet luctus. Sed sit amet justo lacus. Curabitur vitae consectetur odio. Praesent vulputate nunc quis sapien posuere, sed molestie massa congue. Donec sed nisl odio."  />
        </div>
    );
};

export default Home;
