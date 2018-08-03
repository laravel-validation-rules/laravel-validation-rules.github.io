---
title: Subdomain
prev: false
next: false
---

# Subdomain

Validates a user submitted subdomain in your application.

<p align="center">
  <a href="https://travis-ci.org/laravel-validation-rules/subdomain">
    <img src="https://img.shields.io/travis/laravel-validation-rules/subdomain.svg?style=flat-square">
  </a>
  <a href="https://scrutinizer-ci.com/g/laravel-validation-rules/subdomain/code-structure/master/code-coverage">
    <img src="https://img.shields.io/scrutinizer/coverage/g/laravel-validation-rules/subdomain.svg?style=flat-square">
  </a>
  <a href="https://scrutinizer-ci.com/g/laravel-validation-rules/subdomain">
    <img src="https://img.shields.io/scrutinizer/g/laravel-validation-rules/subdomain.svg?style=flat-square">
  </a>
  <a href="https://github.com/laravel-validation-rules/subdomain/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/laravel-validation-rules/subdomain.svg?style=flat-square">
  </a>
  <a href="https://twitter.com/clarkeash">
    <img src="http://img.shields.io/badge/author-@clarkeash-blue.svg?style=flat-square">
  </a>
</p>

## Installation

```bash
composer require laravel-validation-rules/subdomain
```

## Usage

```php
use LVR\Subdomain\Subdomain;

$request->validate([
    'domain' => ['required', new Subdomain],
]);
```
