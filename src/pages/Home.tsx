import React from 'react';
import {Counter} from "../components/Counter/Counter.tsx";
import TestForm from "../UI/Forms/TestForm/TestForm.jsx.tsx";

const Home = () => {
    return (
        <div>
          <Counter/>
            <TestForm/>
        </div>
    );
};

export default Home;