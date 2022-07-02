import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51KTPOyL80v5o2cmovvoCs99BAiznnIlBNmS04zyumtFQ9XwYltr1s6NPlkMBKSESF30httXz5dVULGcyzTjV0O7l00hOv9vtLA';

  // successful callback
  const onToken = token => {
    console.log(token);
    alert('Payment Succesful!');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      stripeKey={publishableKey}
      token={onToken} // successful callback
    />
  );
};

export default StripeCheckoutButton;