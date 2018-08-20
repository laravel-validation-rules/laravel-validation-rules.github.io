---
title: Subdomain
prev: false
next: false
---

<badges repo="subdomain" authorLink="https://twitter.com/clarkeash" authorName="@clarkeash">
    <a href="https://scrutinizer-ci.com/g/laravel-validation-rules/subdomain/code-structure/master/code-coverage">
        <img src="https://img.shields.io/scrutinizer/coverage/g/laravel-validation-rules/subdomain.svg?style=flat-square">
    </a>
    <a href="https://scrutinizer-ci.com/g/laravel-validation-rules/subdomain">
        <img src="https://img.shields.io/scrutinizer/g/laravel-validation-rules/subdomain.svg?style=flat-square">
    </a>
</badges>

# Subdomain

Validates a user submitted subdomain in your application.

<installation repo="subdomain"></installation>

## Usage

```php
use LVR\Subdomain\Subdomain;

$request->validate([
    'domain' => ['required', new Subdomain],
]);
```
