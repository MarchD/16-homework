import React, {Component} from "react";
import "./stories.css";
import Story from "./story";
import {CreateStory} from "./createStory";

const storiesMock = [{
    cover: 'https://images.pexels.com/photos/1308885/pexels-photo-1308885.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    avatar: 'https://images.pexels.com/photos/2804282/pexels-photo-2804282.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    name: 'Marina Dubchak'
},{
    cover: 'https://images.pexels.com/photos/1308885/pexels-photo-1308885.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    avatar: 'https://images.pexels.com/photos/2804282/pexels-photo-2804282.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    name: 'Df sefse'
},{
    cover: 'https://images.pexels.com/photos/1308885/pexels-photo-1308885.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    avatar: 'https://images.pexels.com/photos/2804282/pexels-photo-2804282.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    name: 'Df sefse'
},{
    cover: 'https://images.pexels.com/photos/1308885/pexels-photo-1308885.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    avatar: 'https://images.pexels.com/photos/2804282/pexels-photo-2804282.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    name: 'Df sefse'
},{
    cover: 'https://images.pexels.com/photos/1308885/pexels-photo-1308885.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    avatar: 'https://images.pexels.com/photos/2804282/pexels-photo-2804282.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    name: 'Df sefse'
}];

const user = {
    avatar: 'https://images.pexels.com/photos/2120114/pexels-photo-2120114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
}

export default class Stories extends Component{
    state = { //состояние компонента
        stories: [...storiesMock], //TO DO 
        name: "Default Name",
        cover: 'https://images.pexels.com/photos/1308885/pexels-photo-1308885.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        avatar: 'https://images.pexels.com/photos/2804282/pexels-photo-2804282.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }

    addStory = () => {
        this.setState((prevState) => {
            return {
                stories: [{
                    name: prevState.name,
                    cover: prevState.cover,
                    avatar: prevState.avatar
                }, ...prevState.stories].slice(0, 5)
            };
        })
    }

    changeValue = (field, e) => {
        this.setState({
            [field]: e.target.value
        })
    }

    render() {
        // const  backgroundStyle = {
        //     backgroundImage: ''
        // }
        return (
            <>
                <div className="stories-wrapper">
                    <CreateStory avatar={user.avatar} addStory={this.addStory}/>
                    {this.state.stories.map((story) => {

                        return (
                            <Story avatar={story.avatar} cover={story.cover} name={story.name} time={10} key={story.id}/>
                        )

                    })}
                </div>
                <input value={this.state.name} onChange={this.changeValue.bind(this, "name")}/>
                <input value={this.state.avatar} onChange={this.changeValue.bind(this, "avatar")}/>
                <input value={this.state.cover} onChange={this.changeValue.bind(this, "cover")}/>
            </>
        );
    }
};