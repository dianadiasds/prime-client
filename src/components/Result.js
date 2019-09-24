import React from 'react';

export default function Result(props) {
    const {primeNumbersList} = props;
    const items = primeNumbersList
        .map(item => {
            return <p key={item}> {item} </p>
        });
    return <div>
        {items}
    </div>
}
