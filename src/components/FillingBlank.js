import React from 'react';
import { Input, Button } from 'reactstrap';

function Question(props) {
    let number = props.number;

    for (var elements = [], i = 0; i < 10; ++i) elements[i] = i;    //creates an array with numbers 0 to 9 order by ascedning

    function randomOrder(array) {
        let tmp, current, top = array.length;
        if (top) while (--top) {
            current = Math.floor(Math.random() * (top + 1));
            tmp = array[current];
            array[current] = array[top];
            array[top] = tmp;
        }
        return array;
    }

    elements = randomOrder(elements);

    return (
        <div>
            <h1>Test for Number {number}</h1>
            <ul>
                {elements.map((value, index) => {
                    return <p key={index}>{number} * {value} =
                    <Input type="number" placeholder=" Your answer" />
                    </p>
                })}
            </ul>
            <Button>Submit</Button>
        </div>
    )
}

export default Question;