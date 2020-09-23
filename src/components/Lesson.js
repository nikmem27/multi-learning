import React, { Component } from 'react';

class Lesson extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let myAr = [1,2,3,4,5,6,7,8,9,10]
        return (
            <div>
                <table>
                    <td>
                        {
                            [myAr.map((val, index) => {
                            return <tr>{this.props.match.params.number} * {val} =  {this.props.match.params.number*val}</tr>
                            })]
                        }
                    </td>
                </table>
            </div>
        );
    }
}

export default Lesson;