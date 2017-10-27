import React from 'react';
import { Link } from 'react-router';
import { Button } from 'reactstrap';

export const MenuLink = (props) => {
    return (
        <Link to="games"><Button color="danger">Games</Button></Link>
    );
}