import React from 'react';
import "../App.css";
import moment from 'moment';

const Wellcome = (props) => {

    const { firstName, lastName, date, maritualStatus } = props.location.state
    console.log(date)

    return (
        <div className="wellcome-message">
            <h1 className="wellcome-heading">Happy Anniversary {firstName} {lastName}</h1>
            <h1 className="wellcome-heading">You Were {maritualStatus} On</h1>
            <h1 className="wellcome-heading">{moment(date).format('DD-MM-YYYY')}</h1>
        </div>
    )
}

export default Wellcome;