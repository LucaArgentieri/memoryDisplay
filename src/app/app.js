import React from 'react'
import '../style/style.scss'
import Title from '../components/Title/Title'
import CardBoard from '../components/CardBoard/CardBoard'

export default function App() {
    return (
        <div className="container">
            <Title />
            <CardBoard />
        </div>
    )
}
