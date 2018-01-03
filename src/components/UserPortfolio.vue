<template>
    <b-container>
        <user-portfolio-header :user="userName"></user-portfolio-header>
        <b-row>
            <b-table striped hover :items="items" :fields="fields"></b-table>
        </b-row>
    </b-container>

</template>

<script>
    export default {
        data () {
            return {
                userName: '',

                // Note 'isActive' is left out and will not appear in the rendered table
                fields: [
                    {
                        key: 'currency',
                        sortable: true
                    },

                    {
                        key: 'current_balance',
//                        label: 'Current balance',
                        sortable: true,
                        // Variant applies to the whole column, including the header and footer
//                        variant: 'danger'
                    },
                    {
                        key: 'profit',
                        sortable: true
                    },

                    {
                        label: 'Profit in %',
                        key: 'profit_in_percent',
                        sortable: true
                    }
                ],
                items: [
                    { isActive: false, current_balance: 40, currency: 'BTC' },
                    { isActive: false, current_balance: 21, currency: 'USD' },

                ]
            }
        },
        mounted(){
            this.getUserData('../../portfolio-data.json');
        },

        methods:{
            getUserData(url){
                this.$http.get(url)
                    .then(response => {
                        console.log("--", response.data.user);
                        this.userName = response.data.user.name;

                    })
            },
        }
    }
</script>
