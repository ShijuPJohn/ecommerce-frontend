import React from 'react';

function Rating({value, text, color}) {
    return (
        <div className={"rating"}>
            <span>
                {[1, 2, 3, 4, 5].map((i) => (
                    <i key={i} style={{color}} className={
                        value >= i ? 'fas fa-star' :
                            value >= i - .5 ? 'fas fa-star-half-alt' :
                                'far fa-star'
                    }/>
                ))}
            </span>
            <span>
                {text && text} reviews
            </span>
        </div>
    );
}

export default Rating;