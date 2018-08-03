---
title: Contributing a Rule
next: false
---

# Contributing to Laravel Validation Rules
If you have a rule that you believe could benefit the community then please read this page and get it included. If you have an idea for a rule but are struggling to implement it - [open an issue on the readme repository on Github](https://github.com/laravel-validation-rules/readme/issues/new?title=[request]) and we can discuss how to get started for you.

The most important thing in a submitted rule is that you include test cases showing your rule passes and fails against expected input. Ideally, please license your Rule with the Apache 2.0 license.

For submitted validation rules, we expect a few things:

* Unit tests showing your rule passes and fails against expected input
* An open source and permissive license, preferably [Apache 2.0](https://choosealicense.com/licenses/apache-2.0/).
* [SemVer](https://semver.org/) tagged releases.
* Adheres to PSR1 & PSR2 code styles
* Uses the top level namespace `LVR` for rules


## Request to Include a New Rule
Open an issue on the [readme repository with [new]](https://github.com/laravel-validation-rules/readme/issues/new?title=[new]) in the title and include the short name of your rule, the full title and a brief description of what your rule does. You'll be assigned admin rights within a repository in the organisation to add your rule.

## Continuous Integration
If you do not include continuous integration tests, one of the project administrators will likely set them up against your project so that users can be assured your rule is consistently passing its tests.

## Packagist
The packagist namespace for our validation rules is controlled by [Scott Wilcox](https://dor.ky/). Once your rule package is ready to go, [please open an issue on the readme repository](https://github.com/laravel-validation-rules/readme/issues/new?title=[packagist]) with [packagist] in the title and it’ll be added within a few hours usually and auto-updated from Github.


## Testing
If you’re unsure of how to unit test your validation rules, take a look at the [TimezoneTest.php](https://github.com/laravel-validation-rules/timezone/blob/master/tests/TimezoneTest.php) in the [Timezone repository](https://github.com/laravel-validation-rules/timezone), it’ll show you how to include the Illuminate validation package and bootstrap it within your tests.
