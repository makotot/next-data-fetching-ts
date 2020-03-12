import React from 'react'
import { NextPage } from 'next'

const Index: NextPage = () => (
    <div>index</div>
)

Index.getServerProps = () => {
    return {}
}

export default Index