import React from 'react';

type Props = {
    timezoneName: string;
}

class TimezoneTime extends React.Component<Props> {
    
    constructor(props: Props) {
        super(props);
        /*this.state = {
            timeRemainingInSeconds: props.timezoneName
        };*/
    }

    render() {
        return (
            <div className="TimezoneTime">
                {this.props.timezoneName}
            </div>
        );
    }
}

export default TimezoneTime;