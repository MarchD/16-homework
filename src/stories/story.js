import React, {Component} from "react";


//{avatar:, cover:, name: }

const Story = (props) => (
    <div className="story" style={{ backgroundImage: `url(${props.cover})` }}>
        <div className="story-overlay">

        </div>
        <div className="story-avatar" style={{ backgroundImage: `url(${props.avatar})` }}></div>
        <div className="story-name">
            {props.name}
        </div>
    </div>
)

export default Story;