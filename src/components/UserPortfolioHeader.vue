<template>
    <b-jumbotron>
        <template slot="header">
            <h1>User: {{user}}</h1>
            <h1> Balance: BTC: 1 USD: 15000</h1>
        </template>

        <hr class="my-4">
        <p>
            It uses utility classes for typography and spacing to space content
            out within the larger container.
        </p>
        <b-btn variant="primary" href="#">Do Something</b-btn>
        <b-btn variant="success" href="#">Do Something Else</b-btn>
    </b-jumbotron>

</template>

<script>
    export default {
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },

        props:{
            user:{
                required: true
            }
        }


    }
</script>

<style>

</style>
