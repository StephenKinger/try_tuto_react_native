import React, { Component } from 'react'
import { connect } from 'react-redux'
import { visitsIncrement, dashboardAddItem, dashboardEditItem } from '../modules/dashboardReducer'
import Dashboard from '../../../components/Dashboard/dashboard'

class DashboardContainer extends Component {
    constructor(props) {
        super(props)
        this.onChangeText = this.onChangeText.bind(this)
        this.submitAction = this.submitAction.bind(this)
        this.itemOnEdit = this.itemOnEdit.bind(this)

        this.state = {
            inputValue: '',
            editedItemIndex: null
        }
    }


    componentDidMount(){
        const {visitsIncrement} = this.props;
        visitsIncrement();
    }

    onChangeText(newText) {
        this.setState({ inputValue: newText })
    }

    submitAction() {
        const { dashboardAddItem, dashboardEditItem } = this.props;
        const { inputValue, editedItemIndex } = this.state;

        if (editedItemIndex === null) {
            dashboardAddItem(inputValue);
        } else {
            dashboardEditItem(inputValue, editedItemIndex);
        }

        this.setState({
            inputValue: '',
            editedItemIndex: null
        })
    }

    itemOnEdit(index) {
        console.log(index);
        console.log(this.props.list);
        const {list} = this.props;
        const item = list[index];
        console.log(item);
        this.setState({
            inputValue: item.label,
            editedItemIndex: index
        })
    }

    render(){
        const { inputValue, editedItemIndex } = this.state;
        const buttonText = (editedItemIndex === null) ? 'Add Item' : 'Edit Item';
        return (
            <Dashboard
                {...this.props}
                onChangeText={this.onChangeText}
                submitAction={this.submitAction}
                itemOnEdit={this.itemOnEdit}
                textInput={inputValue}
                buttonText={buttonText} />
        )
    }
}

const mapActionCreators = {
  visitsIncrement,
  dashboardAddItem,
  dashboardEditItem
}

const mapStateToProps = (state) => ({
  value: state.dashboard.visitsCount,
  list: state.dashboard.list
})

export default connect(mapStateToProps, mapActionCreators)(DashboardContainer)
