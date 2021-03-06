import React, { Component } from "react"
import { Redirect } from 'react-router-dom'

export default class EmployeeForm extends Component {
    // Set initial state

    state = {
        employeeName: "",
        redirectToEmployees: false
    }

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        console.log(stateToChange)
        this.setState(stateToChange)
    }

    /*
        Local method for validation, creating animal object, and
        invoking the function reference passed from parent component
     */
    constructNewEmployeee = evt => {
        evt.preventDefault()

            const employee = {
                name: `${this.state.employeeName}`,
            }
            // Create the animal and redirect user to animal list
            this.props.addEmployee(employee)
            this.setState({redirectToEmployees: true})
    }

    render() {
        if (this.state.redirectToEmployees) {
            return <Redirect to='/employees' />
        } else {
            return (

                <React.Fragment>
                    <form className="employeeForm,">
                        <div className="form-group">
                            <label htmlFor="employeeName">Employee name</label>
                            <input type="text" required
                                    className="form-control"
                                    onChange={this.handleFieldChange}
                                    id="employeeName"
                                    placeholder="Employee name" />
                        </div>
                        <button type="submit" onClick={this.constructNewEmployeee} className="btn btn-primary">Submit</button>
                    </form>
                </React.Fragment>
            )
        }
    }
}