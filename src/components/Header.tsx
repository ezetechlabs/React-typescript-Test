import * as React from 'react';
import { Container, Navbar } from 'react-bootstrap';

interface IHeaderProps {
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                    React TypeScript For Ergeon Test
                </Navbar.Brand>
            </Container>
      </Navbar>
  );
};

export default Header;