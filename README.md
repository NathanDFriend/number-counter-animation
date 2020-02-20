# number-counter-animation
Simple jQuery/Javascript Number Counter Animation

## Dependicies
```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.0/jquery.waypoints.js"></script>
```  

### Currency Example
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

### Number Example
```javascript
$().numberCounter({
    parentElem: '.counter',
    style: 'decimal',
    countTo: 100000,
    duration: 10000
});
```
