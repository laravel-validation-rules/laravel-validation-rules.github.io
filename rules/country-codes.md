---
title: Country Codes
prev: false
next: false
---

<badges repo="country-codes" authorLink="https://twitter.com/clarkeash" authorName="@clarkeash">
    <a href="https://scrutinizer-ci.com/g/laravel-validation-rules/country-codes/code-structure/master/code-coverage">
        <img src="https://img.shields.io/scrutinizer/coverage/g/laravel-validation-rules/country-codes.svg?style=flat-square">
    </a>
    <a href="https://scrutinizer-ci.com/g/laravel-validation-rules/country-codes">
        <img src="https://img.shields.io/scrutinizer/g/laravel-validation-rules/country-codes.svg?style=flat-square">
    </a>
</badges>


# Country Codes

Validates 2 & 3 character country codes.

<installation repo="country-codes"></installation>

## Usage

Validate a 2 character country code.

```php
use LVR\CountryCode\Two;

$request->validate([
    'country' => ['required', new Two],
]);
```

Validate a 3 character country code.

```php
use LVR\CountryCode\Three;

$request->validate([
    'country' => ['required', new Three],
]);
