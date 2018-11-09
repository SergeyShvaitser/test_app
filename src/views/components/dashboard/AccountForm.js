import React from 'react';
import PropTypes from 'prop-types'
import { FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap'

const AccauntForm = ({addNewAccount, onFieldChange, accData}) => (
  <form id='account-form'>
    <div>
      <ControlLabel>Add new account</ControlLabel>
      <FormGroup>
        <FormControl
          name="accountId"
          value={accData.accountId}
          type="text"
          onChange={(e, name) => onFieldChange(e, 'accountId')}
          placeholder="Account ID"
        />
      </FormGroup>
      <FormGroup>
        <FormControl
          name="field2"
          type="text"
          onChange={(e, name) => onFieldChange(e, 'field2')}
          placeholder="Field 2"
        />
      </FormGroup>
      <FormGroup>
        <FormControl
          name="field3"
          type="text"
          onChange={(e, name) => onFieldChange(e, 'field3')}
          placeholder="Field 3"
        />
      </FormGroup>
    </div>
    <div id="account-form-footer">
      <Button
        block
        bsStyle="primary"
        onClick={addNewAccount}
        disabled={!accData.accountId || !accData.field2 || !accData.field3}
      >
        Add
      </Button>
    </div>
  </form>
)

AccauntForm.propTypes = {
  addNewAccount: PropTypes.func.isRequired
}

export default AccauntForm;
