import React from 'react';
import PropTypes from 'prop-types';

function Invoice({
  id, amount, organizationId, currency, type, selected, setSelectedId,
}) {
  const handleChange = (event) => {
    setSelectedId(event.target.value);
  };

  return (
    <div>
      <input type="radio" value={id} checked={selected} onChange={handleChange} />
      <p>{id}</p>
      <p>{organizationId}</p>
      <p>{amount}</p>
      <p>{currency}</p>
      <p>{type}</p>
    </div>
  );
}

Invoice.propTypes = {
  id: PropTypes.string,
  amount: PropTypes.number,
  organizationId: PropTypes.string,
  currency: PropTypes.string,
  type: PropTypes.string,
  selected: PropTypes.bool,
  setSelectedId: PropTypes.func,
};

Invoice.defaultProps = {
  id: '',
  amount: 0,
  organizationId: '',
  currency: '',
  type: '',
  selected: false,
  setSelectedId: () => {},
};

export default Invoice;
