import React from 'react'
import Form from 'react-bootstrap/Form';

const SearchBox = ({setSearchGame}) => {
    return (
        <Form>
            <Form.Control placeholder="Search your game..." className="my-3" onChange={(e) => setSearchGame(e.target.value)} />
        </Form>
    )
}

export default SearchBox

