import React, { Component} from 'react';
import { Input, Button } from 'reactstrap';

for (var elements = [], i = 0; i < 10; ++i) elements[i] = i + 1;    //creates an array with numbers 1 to 10 order by ascedning

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

class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        let counter = 0;
        let numbers = [];
        for (let key in this.state) {
            let value = this.state[key]
            if (key != value) {
                console.log(key, value);
                numbers.push(key/this.props.match.params.number);
            }
            else
            {
                counter++;
            }
        }
        alert(`Your grade is ${counter}/10\nYou have to revise in this numbers: ${numbers}`);
        
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    elements = randomOrder(elements)

    render() {
        let number = this.props.match.params.number;
        
        return (
            <div>
                <h1>Test for Number {number}</h1>
                <ul>
                    {elements.map((value, index) => {
                        let multi = `${number} * ${value}`;
                        let correctAnswer = number * value;
                        return <p key={index}>{multi} =
                    <Input type="number" name={`${correctAnswer}`} placeholder=" Your answer" onChange={this.handleChange} />
                        </p>
                    })}
                </ul>
                <Button onClick={this.handleSubmit}>Submit</Button>
            </div>
        )
    }
}

//elements = randomOrder(elements);
/*
function Question() {
    let { number } = useParams();
    
    useEffect(()=>{
        elements = randomOrder(elements);
    }, [number])    //we made this in order to refresh the random list only when our paremeter number is changed. Because if we don't do that, the random ...
                    //...list is refreshed when we hit the toggle button too. When we hit the toggle button the number doesn't change, so the random list will not be refreshed
    //console.log('skata'); Remeber to check that this logs triggers many times just on a refresh

    function handleSubmit(event) {
        console.log('skata');
    }

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
            <Button onClick={handleSubmit}>Submit</Button>
        </div>
    )
}
*/

export default Question;