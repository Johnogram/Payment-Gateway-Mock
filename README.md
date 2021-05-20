# Payment Gateway Mock

## `POST` /paymentToken
Expects JSON payload
```
{
  "cardNumber": "2424 2424 2424 2424"
}
```

- Providing card number `1111 1111 1111 1111` will return a failed request
```
[500] Failed to get payment token
```

- Providing card number `2222 2222 2222 2222` will return a payment token that will fail during processing
```
{
  "paymentToken": "22222222-2222-2222-2222-222222222222"
}
```

- Providing any other card number will return a randomly generate payment token (UUID)
```
{
  "paymentToken": "2491a6ab-2c0e-40dc-916c-1f9de8313608"
}
```

## `POST` /processPayment/{paymentToken}
Expects no body

- Providing token `22222222-2222-2222-2222-222222222222` will return a failed request
```
[422] Payment was declined
```
- Providing any other token will return a successful request
```
[200]
```
