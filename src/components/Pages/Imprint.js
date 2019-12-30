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
                <div className="imprintHeadline">
                    {imprint.headline}
                </div>
                <div className="imprintTextbox">
                    <Scroll >
                        {imprint.text}
                    </Scroll>
                </div>
            </div>
        )

    }
}

export default Imprint;