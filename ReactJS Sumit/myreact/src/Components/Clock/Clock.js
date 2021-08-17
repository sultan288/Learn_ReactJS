import React from 'react';
import Button from './Button';

class Clock extends React.PureComponent {
    // constructor(props) {
    //     super(props);
    //     this.state = { date: new Date() };
    // }
    // OR we can write as below beacuse we don't use constructor-props
    state = { date: new Date(), locale: 'bn-BD' };

    componentDidMount() {
        this.clockTimer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }

    handleClick = (locale) => {
        // e.preventDefault();
        this.setState({
            locale,
        });
    };

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    render() {
        // const { locale } = this.props;
        // console.log('clock render');
        const { date, locale } = this.state;
        // let button;
        // if (locale === 'bn-BD') {
        //     button = (
        //         <Button type="button" change={this.handleClick} locale="en-US">
        //             Click here
        //         </Button>
        //     );
        // } else {
        //     button = (
        //         <Button type="button" change={this.handleClick} locale="bn-BD">
        //             Click here
        //         </Button>
        //     );
        // }
        return (
            <div>
                <h1>{date.toLocaleTimeString(locale)}</h1>
                {locale === 'bn-BD' ? (
                    <Button
                        type="button"
                        change={this.handleClick}
                        locale="en-US"
                        show={false}
                        enable
                    />
                ) : (
                    <Button type="button" change={this.handleClick} locale="bn-BD" show enable />
                )}
            </div>
        );
    }
}

export default Clock;
