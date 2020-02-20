# number-counter-animation
Simple jQuery/Javascript Number Counter Animation

# Currency Example
```javascript
$().numberCounter({
    parentElem: '.counter',
    style: 'currency',
    currency: 'USD',
    countTo: 100000,
    duration: 10000,
    currencyRemoveDecimal: 1,
});
```

# Number Example
```javascript
$().numberCounter({
    parentElem: '.counter',
    style: 'decimal',
    countTo: 100000,
    duration: 10000
});
```
