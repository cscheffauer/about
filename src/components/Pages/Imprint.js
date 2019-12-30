import React, { Component } from 'react'

import { imprint } from '../../data/imprint'
import Scroll from '../Layout/Tools/Scroll'

import './Imprint.scss';


class Imprint extends Component {
    constructor() {
        super();
        this.state = {
            imprint: imprint
        };
    }
    render() {
        return (
            <div className="imprintOuterBox" >
                <Scroll>
                    {imprint.text}
                </Scroll>
            </div>
        )

    }
}

export default Imprint;