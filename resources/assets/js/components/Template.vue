<template>
    <div>
        ТВОЯ ВЕРСТКА
    </div>
</template>

<style>
    /*...*/
</style>

<script>
    export default {
        data(){
            return {
                someVar: 'test',
                someVar2: [124,2,213],
            }
        },
        mounted(){
            this.$nextTick(() => {
                // Зашел в страницу
                console.log(this.someVar);

                this.someFunc();
            })
        },
        destroyed(){
            // Уходишь со страницы
        },
        methods: {
            someFunc(){
                console.log('Hello world');
            }
        }
    }
</script>
