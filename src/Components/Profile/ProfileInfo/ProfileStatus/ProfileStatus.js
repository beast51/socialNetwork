import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.profileStatus
    };

    activateEditMode = () => {
        this.setState({editMode: true});
    };

    deactivateEditMode = () => {
        this.setState({editMode: false});
        this.props.updateProfileStatus(this.state.status);
    };

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.profileStatus !== this.props.profileStatus) {
            this.setState({
                status: this.props.profileStatus
            })
        }
    }

    render() {
        return (
            <div>
                {this.state.editMode === false ?
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.profileStatus || '----'}</span>
                    </div>
                    :
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} type="text"
                               value={this.state.status} onBlur={this.deactivateEditMode}/>
                    </div>}
            </div>
        )
    }
}

export default ProfileStatus;