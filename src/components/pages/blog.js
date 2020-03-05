import React, {Component} from 'react';
import { Link } from "react-router-dom";
import axios from 'axios'

export default class Blog extends Component {
    constructor() {
        super()

        this.state = {
            blogItems : []
        }

        this.getBlogItems = this.getBlogItems.bind(this)
    }

    getBlogItems(){
        axios.get("https://jeffreyzelaya.devcamp.space/portfolio/portfolio_blogs", {
            withCredentials: true
        }).then(response => {
            this.setState({
                blogItems: response.data.portfolio_blogs
            })
        }).catch(error => {
            console.log("getBlogItem error", error)
        })
    }

    componentWillMount() {
        this.getBlogItems()
    }
    
    render() {
        const blogRecords = this.state.blogItems.map(blogItem => {
            return <h1 key = {blogItem.id}>{blogItem.title}</h1>
        })

        return (
            <div>
                {blogRecords}
            </div>
        )
    }
    
}