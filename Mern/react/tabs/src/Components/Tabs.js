import React from 'react'


const Tabs = (props) => {
    const {tab, setTab} = props;

    const showContent= (content) => {
        props.setContent(content)
    }

    return (
        <div>
            <ul>
            {
    props.tab.map((tab, i)=><li onClick={e => showContent(tab.content)}style={{border:'1px gray solid', fontSize: "large" }}>{tab.label}</li>)
            }
            </ul> 
        </div>
    )
}

export default Tabs

