import * as React from 'react';
import { Container, Navbar } from 'react-bootstrap';

interface IHeaderProps {
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                    Ergeon Test 1 - Make a horizontal calendar component
                </Navbar.Brand>
            </Container>
      </Navbar>
  );
};

export default Header;