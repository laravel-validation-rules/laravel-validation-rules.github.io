---
title: IP
prev: false
next: false
---

<badges repo="ip" authorLink="https://twitter.com/clarkeash" authorName="@clarkeash">
    <a href="https://scrutinizer-ci.com/g/laravel-validation-rules/ip/code-structure/master/code-coverage">
        <img src="https://img.shields.io/scrutinizer/coverage/g/laravel-validation-rules/ip.svg?style=flat-square">
    </a>
    <a href="https://scrutinizer-ci.com/g/laravel-validation-rules/ip">
        <img src="https://img.shields.io/scrutinizer/g/laravel-validation-rules/ip.svg?style=flat-square">
    </a>
</badges>


# IP

Validates an ip address is either public or private. Supports ipv4 & ipv6.

<installation repo="ip"></installation>

## Usage

Validate an ip address is a public address.

```php
use LVR\IP\PublicAddress;

$request->validate([
    'ip' => ['required', new PublicAddress],
]);
```

Validate an ip address is a private address.

```php
use LVR\IP\PrivateAddress;

$request->validate([
    'ip' => ['required', new PrivateAddress],
]);
```
