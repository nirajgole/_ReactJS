import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51Ia0ZTSGSHzGRD6p0CzTVSK3rew5iAJ0xEp0W5FYNVvxK2EbBzag9ffiPrJfDTuhhDZMWeFYfaUAc62quooOAGha00i13m7Xmc';

  const onToken = token => {
    console.log(token);
    alert('Payment is successful.');
  };
  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='http://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
