import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistoty} from 'react-router';
import {Button, Radio, Icon} from 'antd';
import 'antd/dist/antd.css';

export default class Root extends React.Component {
    render() {
        return (
            <div>
                <Button type="primary">Primary</Button>
                <Button>Default</Button>
                <Button type="dashed">Dashed</Button>
                <Button type="danger">Danger</Button>
            </div>
        )
    }
}

ReactDOM.render(
    <Root/>, document.getElementById('mainContainer'));
