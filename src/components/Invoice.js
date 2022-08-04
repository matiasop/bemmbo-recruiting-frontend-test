import React from 'react';
import PropTypes from 'prop-types';

function Invoice({
  id, amount, organizationId, currency, type, selected, setSelectedId,
}) {
  const handleChange = (event) => {
    setSelectedId(event.target.value);
  };

  return (
    <div className="flex align-center justify-center my-3 max-w-4xl self-center rounded px-4 py-2">
      <input className="mx-2" type="radio" value={id} checked={selected} onChange={handleChange} />
      <p className="mx-1">{id}</p>
      <p className="mx-1">
        (
        {organizationId}
        )
      </p>
      <p className="mx-2 ml-20">
        $
        {amount}
      </p>
      <p className="mx-2">
        {currency}
      </p>
      <p className="mx-2">{type}</p>
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
