import React, { useEffect } from 'react';
import { useParams, withRouter } from 'react-router-dom';
import { Input, Button } from 'reactstrap';

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


//elements = randomOrder(elements);

function Question() {
    let { number } = useParams();
    
    useEffect(()=>{
        elements = randomOrder(elements);
    }, [number])    //we made this in order to refresh the random list only when our paremeter number is changed. Because if we don't do that, the random ...
                    //...list is refreshed when we hit the toggle button too. When we hit the toggle button the number doesn't change, so the random list will not be refreshed
    //console.log('skata'); Remeber to check that this logs triggers many times just on a refresh

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