import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsSearch } from 'react-icons/bs';

export default function SearchBar({ handleSearch }) {
    return (
        <InputGroup size="lg" className="mb-3">
            <FormControl
                autoFocus={true}
                onChange={(ev) => handleSearch(ev.target.value)} 
                placeholder="Search Movies..."
                aria-label="search"
            />
            <InputGroup.Append>
                <InputGroup.Text><BsSearch size="24px" /></InputGroup.Text>
            </InputGroup.Append>
        </InputGroup> 
    );
}