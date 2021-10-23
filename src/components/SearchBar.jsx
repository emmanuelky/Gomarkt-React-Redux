import React from 'react'
import { FormControl, Form, Button } from 'react-bootstrap'


const SearchBar = () => {
    return (
        <div>
            <Form className="d-flex mx-5">
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"

                />
            </Form>
        </div>
    )
}

export default SearchBar
