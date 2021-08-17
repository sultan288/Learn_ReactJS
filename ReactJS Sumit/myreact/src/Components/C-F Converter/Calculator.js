import React from 'react';
import { convert, toCelsius, toFarenheit } from '../lib/Convert';
import BoilingVerdict from './BoilingVerdict';
import TemperatureInput from './TemperatureInput';

export default class Calculator extends React.Component {
    state = { temperature: '', scale: 'c' };

    handleChange = (e, scale) => {
        this.setState({
            temperature: e.target.value,
            scale,
        });
    };

    render() {
        const { temperature, scale } = this.state;
        const celsius = scale === 'f' ? convert(temperature, toCelsius) : temperature;
        const farenheit = scale === 'c' ? convert(temperature, toFarenheit) : temperature;
        return (
            <div>
                <TemperatureInput
                    scale="c"
                    temperature={celsius}
                    onTemperatureChange={this.handleChange}
                />
                <TemperatureInput
                    scale="f"
                    temperature={farenheit}
                    onTemperatureChange={this.handleChange}
                />
                <BoilingVerdict celsius={celsius} />
            </div>
        );
    }
}
