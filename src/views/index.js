import React from 'react';
import { Link } from "react-router-dom";
import { Grid, Segment, Button, Label, Header, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clickButtonPreferencial, clickButtonNormal } from '../actions';

class Index extends React.Component {

    render() {
        const { totalPreferencial, totalNormal, clickButtonNormal, clickButtonPreferencial } = this.props;
        return (

            <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>

                <Grid.Column>
                    <Segment
                        padded="very"
                        className="painel-shadow"
                        inverted>

                        <Header
                            as='h1'
                            content='Bem-vindo!'
                            color='green'
                            inverted
                            style={{
                                fontSize: '4em',
                                fontWeight: 'bolt',
                                marginBottom: 0,
                                marginTop: '1em',
                            }}
                        />
                        <Header size="huge">Escolha uma opção de Atendimento!</Header>
                        <br /><br />
                        <Button.Group fluid size="massive">
                            <Button as='div' labelPosition='left' >
                                <Label as='a' basic color='blue' pointing='right'>{totalPreferencial}</Label>
                                <Button color="blue" as={Link} to='/preferencial'
                                    onClick={() => clickButtonPreferencial()}>
                                    <Icon name='universal access' />
                                    Preferencial
          </Button>
                            </Button>
                            <Button as='div' labelPosition='right' >

                                <Button color="green" as={Link} to='/normal'
                                    onClick={() => clickButtonNormal()}>
                                    Normal
          </Button>
                                <Label as='a' basic color='green' pointing='left'>{totalNormal}</Label>
                            </Button>
                        </Button.Group>
                    </Segment>
                </Grid.Column>
            </Grid >
        )
    }
};

const mapStateToProps = store => ({
    totalPreferencial: store.clickReducer.totalPreferencial,
    totalNormal: store.clickReducer.totalNormal
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({ clickButtonNormal, clickButtonPreferencial }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Index);