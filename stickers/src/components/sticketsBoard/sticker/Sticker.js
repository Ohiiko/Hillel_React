import React from 'react'




function Sticker(props) {

    return (
        <div style = {{...stickerStyle}} >
            <div >
                <button 
                    style = {{...stickerBtnDelStyle}} 
                    className = "stickerBtnDel" 
                    onClick = {() => props.onClick(props.sticker.id)}>del
                </button>
            </div>
            <textarea 
                rows = "4"
                cols = "18"
                style = {{...textareaStyle}}
                value = {props.sticker.task} 
                onChange = {(e) => props.onChangeText(e.target.value, props.sticker.id)}>
            </textarea>
        </div>
    )
}

export default Sticker

const stickerBtnDelStyle = {
    float: 'right'
}

const textareaStyle = {
    width: '144px',
    height: '61px',
    background: 'lightyellow'
}

const stickerStyle = {
    float: 'none',
    display: 'inline-block',
    width: '150px',
    height: '88px',
    margin: '5px',
    border: 'solid 1px black',
    background: 'lightyellow'
}
