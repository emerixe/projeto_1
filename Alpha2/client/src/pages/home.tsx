import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardText, CardTitle, Container } from 'reactstrap';
import IPageProps from '../interfaces/page';

const HomePage: React.FunctionComponent<IPageProps> = props => {
    return (
        <div>
            <Card
                body
                className="my-2"
                style={{
                    width: '18rem'
                }}
            >
                <CardTitle tag="h5">
                    Admin user
                </CardTitle>
                <CardText>
                    
                </CardText>
                <Button color="primary">
                    Change your password <Link to="/change">here</Link>.
                </Button>
            </Card>
            <Card
                body
                className="text-center"
                style={{
                    width: '18rem'
                }}
            >
                <CardTitle tag="h5">
                logout
                </CardTitle>
                <CardText>
                    
                </CardText>
                <Button color="primary">
                logout <Link to="/logout">here</Link>.
                </Button>
            </Card>
            <Card
                body
                className="text-end my-2"
                style={{
                    width: '18rem'
                }}
            >
                <CardTitle tag="h5">
                    Cadastro de Pessoas
                </CardTitle>
                <CardText>
                    
                </CardText>
                <Button color="primary">
                Cadastro de Pessoas <Link to="/Person">here</Link>.
                </Button>
            </Card>
            <Card
                body
                className="text-end my-2"
                style={{
                    width: '18rem'
                }}
            >
                <CardTitle tag="h5">
                Cadastro 3 <Link to="/change">here</Link>.
                </CardTitle>
                <CardText>
                   
                </CardText>
                <Button color="primary">
                Cadastro 3 <Link to="/change">here</Link>.
                </Button>
            </Card>
            <Card
                body
                className="text-end my-2"
                style={{
                    width: '18rem'
                }}
            >
                <CardTitle tag="h5">
                    Cadastro 4
                </CardTitle>
                <CardText>
                    
                </CardText>
                <Button color="primary">
                Cadastro 4 <Link to="/change">here</Link>.
                </Button>
            </Card>
        </div>
    );
}

export default HomePage;


