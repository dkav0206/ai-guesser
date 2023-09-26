import { Checkbox, Slider } from "@mui/material"
import * as React from 'react'
import "./MenuComponent.scss"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../../redux/store"
import { getaudioValue } from "../../redux/AudioSlice/AudioSlice"

function MenuComponent () { 
    const dispatch = useDispatch<AppDispatch>(); 
    const [audioValue, setAudio] = React.useState<number>();
    React.useEffect(() => {
        dispatch(getaudioValue(audioValue))
    },[audioValue])


    return (
        <div className="menu-field">
            <button className="menu-button">
                <div>
                    <h1>solo</h1>
                    <div className="menu-description">
                        <h3>Challange yourself and be gay</h3>
                    </div>
                </div>
            </button>
            <button className="menu-button">
                <div>
                    <h1>multiplayers</h1>
                    <div className="menu-description">
                        <h3>Challange you gay and lesbian friends</h3>
                    </div>
                    
                </div>
            </button>
            <button className="menu-button">
                <div>
                    <h1>create AI art</h1>
                    <div className="menu-description">
                        <h3>create your gay as art and add it to our lesbian data base</h3>
                    </div>
                </div>
            </button>
            <button className="menu-button">
                <div>
                    <h1>settings</h1>
                    <div className="menu-description">
                        <div className="d-flex align-items-center justify-content-end">
                        <div className="slider-bg">
                            <div className="slider-background">
                                <Slider className="slider" min={0} max={10} step={1} defaultValue={5} aria-label="Default" valueLabelDisplay="auto" onChange={(event: any) => { 
                                    setAudio(event.target.value)
                                }}/>   
                            </div>
                        </div>
                        <h3 style={{whiteSpace:"nowrap"}}>gay sound</h3>
                        </div>
                        <div className="d-flex align-items-center justify-content-end">
                            <Checkbox className="menu-checkbox" 
                                        sx={{
                                            color:"#04D9FF",
                                            '&.Mui-checked': {
                                                color: "#04D9FF",
                                            },
                                        }}/> 
                            <h3>dark mode</h3>
                        </div>

                        
                    </div>
                </div>
            </button>
        </div>
    ) 
}

export default MenuComponent