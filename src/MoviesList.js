import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { Container ,Card, Form} from 'react-bootstrap'
class MovieList extends React.Component{
    constructor(){
        super()
        this.state={
            movies:[],
            data:'',
        }
    }
    handleSearch=(e)=>{
        const data=e.target.value
        this.setState({data})
        axios.get(`https://www.omdbapi.com/?apikey=caac10e0&s=${data}&type=movie`)
        .then(response=>{
            const search=response.data.Search
            console.log('movies list',search)
            this.setState({movies:search})
        })
        .catch(err=>{
            console.log(err)
        })
        this.setState({
            search:e.target.value
        })
    }
    render(){
        console.log('state',this.state.movies)
        return(
            <div className='fluid-container'>
                <Container>
                    <h1 className='pt-5 pb-2' style={{textAlign:"center",fontSize:'34px'}}>Search Your Movie Name </h1>
                    <Form.Control size='lg'
                        type='search' 
                        name='data'   
                        onChange={this.handleSearch} 
                        placeholder='search movie by title'
                    />
                    {
                        this.state.movies!=undefined?(
                            <div>
                                    {
                                        this.state.movies.map((ele,i)=>{
                                            return (<Card.Title key={i}><Link to={`/movies/${ele.imdbID}`}>{ele.Title}</Link></Card.Title>)
                                        })
                                    }
                            </div>):('')
                    }
                </Container>
                
            </div>
        )
    }
}
export default MovieList