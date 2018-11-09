import React from 'react';
import { ListGroup, ListGroupItem, Button, Glyphicon } from 'react-bootstrap';
import shortid from 'shortid'

const AccountsList = ({accounts, removeAccount}) => (
  <ListGroup id="accounts-list">
    {!accounts.length ? (
      <p>No accounts</p>
    ) : (
      <ListGroup>
        {accounts.map(account => (
          <ListGroupItem id="list-item" key={shortid.generate()}>
            <div id="main-fields">
              <p><strong>AccountID:</strong> {account.accountId}</p>
              <p><strong>Field 2:</strong> {account.field2}</p>
              <p><strong>Field 3:</strong> {account.field3}</p>
            </div>
            <div id="remove">
              <Button onClick={() => removeAccount(account.accountId)}><Glyphicon glyph="glyphicon glyphicon-remove" /></Button>
            </div>
          </ListGroupItem>
        ))}
      </ListGroup>
    )}
  </ListGroup>
)

export default AccountsList;
