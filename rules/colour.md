---
title: Colour
prev: false
next: false
---

<badges repo="colour" authorLink="https://twitter.com/clarkeash" authorName="@clarkeash">
    <a href="https://scrutinizer-ci.com/g/laravel-validation-rules/colour/code-structure/master/code-coverage">
        <img src="https://img.shields.io/scrutinizer/coverage/g/laravel-validation-rules/colour.svg?style=flat-square">
    </a>
    <a href="https://scrutinizer-ci.com/g/laravel-validation-rules/colour">
        <img src="https://img.shields.io/scrutinizer/g/laravel-validation-rules/colour.svg?style=flat-square">
    </a>
</badges>


# Colour

Validates colours, currently supporting hex codes only.

<installation repo="colour"></installation>


## Usage

```php
use LVR\Colour\Hex;

$request->validate([
    'colour' => ['required', new Hex],
]);
```
