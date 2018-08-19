module.exports = {
    title: 'Laravel Validation Rules',
    description: 'A collection of Laravel 5 validation engine rules.',
    base: '/',
    themeConfig: {
        search: true,
        repo: 'laravel-validation-rules/laravel-validation-rules.github.io',
        editLinks: true,
        nav: [
            {text: 'Home', link: '/'},
            {text: 'About', link: '/guide/about'},
            {text: 'Twitter', link: 'https://twitter.com/laravelvr'},
        ],
        sidebar: [
            ['guide/about', 'About'],
            ['guide/contributing', 'Contributing a Rule'],
            {
                title: 'Rules',
                collapsable: false,
                children: [
                    'rules/colour',
                    'rules/credit-card',
                    'rules/subdomain',
                ]
            }
        ]
    }
}
