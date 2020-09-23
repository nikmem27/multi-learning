import React, { Component } from 'react';

class Lesson extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <table>
                    <tr>
                        { for(let i = 0; i < 10; i++) }
                    </tr>
                </table>
            </div>
        );
    }
}

export default Lesson;