import React,{Component} from 'react';

export default class NotFind extends Component {
    componentWillMount() {
        const {staticContext} = this.props

        staticContext && (staticContext.notFind = true)
    }

    render() {
        return (
            <div>
                not find
            </div>
        )
    }
}