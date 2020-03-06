import React, {Component} from "react"
import axios from "axios"

export default class BlogDetail extends Component {
    constructor(props){
        super(props)
        this.state = {
            currentID: this.props.match.params.slug,
            blogItem: {}
        }
    }

    getBlogItem() {
        axios.get(
            `https://jeffreyzelaya.devcamp.space/portfolio/portfolio_blogs/${this.state.currentID}`
        ).then(response => {
            console.log('response', response)
        }).catch(error => {
            console.log('error', error)
        })

    }
    
    componentDidMount() {
        this.getBlogItem()
    }

    render(){
        return (
        <div>
            <h1>Blog detail</h1>
        </div>
        )
    }
    }
  

    
