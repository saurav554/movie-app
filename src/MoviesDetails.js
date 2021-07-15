import React from 'react'
import axios from 'axios'
import {Card,Container,Row,Col, Alert} from 'react-bootstrap'
import {Link} from 'react-router-dom'

class MovieShow extends React.Component{
    constructor(){
        super()
        this.state={
            show:{}
        }
    }
    componentDidMount(){
        const id=this.props.match.params.id
        axios.get(`https://www.omdbapi.com/?i=${id}&apikey=caac10e0`)
        .then(response=>{
            const show=response.data
            console.log('movie show',show)
            this.setState({show})
        })
    }
    render(){
        // console.log('show',this.state.show.title)
        return(
            <div className='fluid-container'>
                <h1 className='pt-5 pb-2' style={{textAlign:"center"}}>Movie Details </h1>
                <Container>
                        <Card.Body className='border rounded-lg pl-5 mt-5'>
                            <Card.Header className='border-0 ml-3 mb-3'>
                                <b>Movie Name:--- {this.state.show.Title}</b>
                            </Card.Header>
                                <Row>
                                    <Col md={6}><img src={this.state.show.Poster} alt='pic of candidate' className='img-rersponsive ml-3' style={{width:'auto',height:'auto'}}></img></Col>
                                    <Col md={6}>
                                        <Alert varient='success'>
                                        <p className='ml-3'>
                                            <b> Released - </b>{this.state.show.Released} ({this.state.show.Runtime})<br/>
                                            <b>Awards - </b>{this.state.show.Awards}<br/>
                                            <b> Country - </b>{this.state.show.Country}<br/>
                                            <b> Language -</b> {this.state.show.Language}<br/>
                                            <b>Actors - </b>{this.state.show.Actors}<br/>
                                            <b> Writer -</b>{this.state.show.Writer}<br/>
                                            <b>Genre -</b> {this.state.show.Genre}<br/>
                                            
                                        </p>
                                        </Alert>
                                        
                                    </Col>
                                </Row><br/>
                            <Card.Link href="/">back</Card.Link>
                        </Card.Body>
                </Container>
            </div>

        )
    }
}
export default MovieShow