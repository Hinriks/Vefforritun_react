import React from 'react';
import { getBubbleById } from '../../services/bubbleService';

class BubbleDetails extends React.Component {
    state = {
        bubble: {},
    };

    async componentDidMount() {
        this.setState({ bubble: await getBubbleById(this.props.match.params.id) })
    }

    render() {
        const { name, description, price, image } = this.state.bubble
        return (
            <div className="row">
                <div className="col-md-6 mb-4 mb-md-0">
                    <img src={ image } className="p-5"/>
                </div>
                <div className="col-md-6">
                    <h5>{ name }</h5>
                    <p>
                        <strong>{ price } kr.</strong>
                    </p>
                    <p className="pt-1">{ description }</p>
                </div>
            </div>
        )
    }
};

export default BubbleDetails;