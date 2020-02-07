import React, {useState, useEffect} from 'react'
import Sticker from './sticker/Sticker'



function StickersBoard() {
    
    const [stickers, setStickers] = useState([])
    
    useEffect(() => {
        const sticker = localStorage.getItem('sticker')
        setStickers(JSON.parse(sticker) || [])
      }, [])
    
    useEffect(() => {
        localStorage.setItem('sticker', JSON.stringify(stickers))
      }, [stickers])


    function renderStickers(){

        return stickers.map((sticker) => {
            return <Sticker 
                key = {sticker.id}
                onClick = {onDeleteStickerBtn}
                sticker = {sticker}
                onChangeText = {onChangeText}/>
            })
    }

    function onChangeText(value, id){
        const newStickers = stickers.map(sticker => {
            return sticker.id === id ? {...sticker, task: value } : sticker;})
        setStickers(newStickers);
    }

    function onDeleteStickerBtn (id){
        const newStickers = stickers.filter(item =>{
            return item.id !== id;
        })
        setStickers(newStickers);  
    }

    function addNewStikerOnBoard(){
        setStickers([...stickers, creatNewStiker()])
    }

    function creatNewStiker(){
        return {
            id: Date.now(),
            task: ""
        }
    }


    return (
        <div style ={{...containerStyle}}>
            <div> Do you need add new sticker?
                <button onClick = {addNewStikerOnBoard}>
                    Add</button>
            </div>
            <div 
                style = {{...boardStyle}}>
                {renderStickers()}
            </div>
        </div>
    )
}

export default StickersBoard

const boardStyle = {
    display: 'inline-block',
    width: '80%',
    height: '80%',
    border: 'solid 1px black',
    background: 'lightblue'
}

const containerStyle = {
    background: 'grey',
    width: '100%',
    height: '680px'
}