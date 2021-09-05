import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51Ia0ZTSGSHzGRD6p0CzTVSK3rew5iAJ0xEp0W5FYNVvxK2EbBzag9ffiPrJfDTuhhDZMWeFYfaUAc62quooOAGha00i13m7Xmc';

  const onToken = token => {
    console.log(token);

    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    })
      .then(res => {
        alert('Payment is successful.');
      })
      .catch(err => {
        console.log('Payment error', JSON.parse(err));
        alert('There was an issue with your payment.');
      });
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
