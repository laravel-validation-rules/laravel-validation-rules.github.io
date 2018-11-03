---
title: Email Validation Mailgun
prev: false
next: false
---

# Email Validation Mailgun

Email validation that uses the [Mailgun API](https://documentation.mailgun.com/en/latest/api-email-validation.html#email-validation) 
for a three-step validation check.  

<installation repo="email-validation-mailgun"></installation>

## Usage
Use the following rule to validate your email fields. The rule will first check the address against 
PHP's [FILTER_VALIDATE_EMAIL](http://php.net/manual/en/filter.filters.validate.php) and then will call the Mailgun API.

```php
$request->validate([
    'email' => ['required', 'mailgun_email'],
]);
```

Further flags can added to the rule to make the validation more strict.

```php
$request->validate([
    'email' => ['required', 'mailgun_email:role,disposable,mailbox,strict'],
]);
```

Each flag if present, will add the following validation rules:

* **role** Don't allow role-based addresses such as ‘admin’, ‘sales’, ‘webmaster’...
* **disposable** Don't allow disposable email domains.
* **mailbox** A call is made to the ESP to verify the mailboxes existence. Add strict flag to ensure that Mailgun was able to verify a mailbox and didn't return "Unknown".
* **strict** Always require a response from Mailgun to validate. By default if a API request fails, the validation will pass. The strict flag ensures that a Mailgun response was recieved.

## Recommended Usage
The following configuration will try to check if the email addresses mailbox exists and is not a disposable email address. If 
Mailgun is not contactable or Mailgun can't perform the mailbox check, the validation will fall back on PHP's FILTER_VALIDATE_EMAIL.
```php
$request->validate([
    'email' => ['required', 'mailgun_email:disposable,mailbox'],
]);
```
