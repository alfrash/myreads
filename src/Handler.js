import React from 'react'
import PropTypes from 'prop-types'


function Handler(props) {
    const { shelf, onChange } = props;
    
    return (
        <div className="book-shelf-changer">
            <select onChange={onChange} value={shelf}>
                <option value='move' disabled>Move to...</option>
                <option value='currentlyReading'>Currently Reading</option>
                <option value='wantToRead'>Want to Read</option>
                <option value='read'>Finished Reading</option>
                <option value='none'>None</option>
            </select>
        </div>
    )
}

Handler.propTypes = {
    shelf: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default Handler;