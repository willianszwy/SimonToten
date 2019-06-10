import React from 'react';
import QRCode from 'qrcode.react'
import { Link } from "react-router-dom";
import { Grid, Segment, Button, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';



class Normal extends React.Component {
    render() {
        const { totalNormal } = this.props;

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
                            content={"NR" + totalNormal}
                            inverted
                            color="green"
                            style={{
                                fontSize: '4em',
                                fontWeight: 'normal',
                                marginBottom: 0,
                                marginTop: '1em',
                            }}
                        />
                        <br />
                        <QRCode value={"NR" + totalNormal} renderAs='svg' size={256} includeMargin={true} />
                    </Segment>
                    <Button circular as={Link} to='/' size="massive" content="início" color="black" icon='home' />
                </Grid.Column>
            </Grid>
        )
    }
};

const mapStateToProps = store => ({
    totalNormal: store.clickReducer.totalNormal
});

export default connect(mapStateToProps)(Normal);