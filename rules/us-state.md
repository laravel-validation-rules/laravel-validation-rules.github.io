---
title: US State
prev: false
next: false
---

<badges repo="us-state" authorLink="https://twitter.com/tylercd100" authorName="@tylercd100">
    <a href="https://scrutinizer-ci.com/g/laravel-validation-rules/us-state/code-structure/master/code-coverage">
        <img src="https://img.shields.io/scrutinizer/coverage/g/laravel-validation-rules/us-state.svg?style=flat-square">
    </a>
    <a href="https://scrutinizer-ci.com/g/laravel-validation-rules/us-state">
        <img src="https://img.shields.io/scrutinizer/g/laravel-validation-rules/us-state.svg?style=flat-square">
    </a>
</badges>


# US State

Validate US States and Canada Provinces

<installation repo="us-state"></installation>

## Usage

```php
use LVR\State\Abbr;
use LVR\State\Full;

# Abbreviation vs Full
$request->validate(['test' => 'UT'], ['test' => new Abbr]); // Pass!
$request->validate(['test' => 'BC'], ['test' => new Abbr); // Pass!
$request->validate(['test' => 'Utah'], ['test' => new Full]); // Pass!
$request->validate(['test' => 'Alberta'], ['test' => new Full]); // Pass!

# Abbreviation - USA vs Canada
$request->validate(['test' => 'UT'], ['test' => new Abbr]); // Pass!
$request->validate(['test' => 'UT'], ['test' => new Abbr('US')]); // Pass!
$request->validate(['test' => 'BC'], ['test' => new Abbr('CA')); // Pass!

# Full - USA vs Canada
$request->validate(['test' => 'Utah'], ['test' => new Full('US')]); // Pass!
$request->validate(['test' => 'Alberta'], ['test' => new Full('CA')]); // Pass!
```
