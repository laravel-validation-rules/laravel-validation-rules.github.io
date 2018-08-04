<template>
    <div>
        <p align="center" class="badges">
            <a :href="travis.link" v-if="repo">
                <img :src="travis.image">
            </a>
            <slot></slot>
            <a :href="packagist.link" v-if="repo">
                <img :src="packagist.image">
            </a>
            <a :href="license.link" v-if="repo">
                <img :src="license.image">
            </a>
            <a :href="author.link" v-if="authorLink && authorName">
                <img :src="author.image">
            </a>
        </p>
    </div>
</template>

<script>
    export default {
        props: ['repo', 'authorName', 'authorLink'],

        computed: {
            travis() {
                return {
                    image: `https://img.shields.io/travis/laravel-validation-rules/${this.repo}.svg?style=flat-square`,
                    link: `https://travis-ci.org/laravel-validation-rules/${this.repo}`
                }
            },

            license() {
                return {
                    image: `https://img.shields.io/github/license/laravel-validation-rules/${this.repo}.svg?style=flat-square`,
                    link: `https://github.com/laravel-validation-rules/${this.repo}/blob/master/LICENSE`
                }
            },

            author() {
                return {
                    image: `http://img.shields.io/badge/author-${this.authorName}-blue.svg?style=flat-square`,
                    link: this.authorLink
                }
            },

            packagist() {
                return {
                    image: `https://img.shields.io/packagist/dt/laravel-validation-rules/${this.repo}.svg?style=flat-square`,
                    link: `https://packagist.org/packages/laravel-validation-rules/${this.repo}`
                }
            }
        }
    }
</script>

<style scoped>
    .badges a img{
        margin-left: 2px;
        margin-right: 2px;
    }
</style>
