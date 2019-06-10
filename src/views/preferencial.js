import React from 'react';
import QRCode from 'qrcode.react'
import { Link } from "react-router-dom";
import { Grid, Segment, Button, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';



class Preferencial extends React.Component {
    render() {
        const { totalPreferencial } = this.props;

        return (
            <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
                <Grid.Column>
                    <Segment
                        padded="very"
                        inverted
                        className="painel-shadow">
                        <h1>Insira o código abaixo ou use a opção QR Code no seu aplicativo:</h1>
                        <Header
                            as='h1'
                            content={"PR" + totalPreferencial}
                            inverted
                            color="blue"
                            style={{
                                fontSize: '4em',
                                fontWeight: 'normal',
                                marginBottom: 0,
                                marginTop: '1em',
                            }}
                        />
                        <br />
                        <QRCode value={"PR" + totalPreferencial} renderAs='svg' size={256} includeMargin={true} />

                    </Segment>
                    <Button circular as={Link} to='/' size="massive" content="início" color="black" icon='home' />
                </Grid.Column>
            </Grid>
        )
    }
};

const mapStateToProps = store => ({
    totalPreferencial: store.clickReducer.totalPreferencial
});

export default connect(mapStateToProps)(Preferencial);