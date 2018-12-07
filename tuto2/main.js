
const app = new Vue({
    el: '#app',
    data: {
        message: 'Hello'
    },
    computed: {
        // a computed getter
        // computed properties are cached based on their dependencies
        // so if message does not change, cache hit
        reversedMessage: function() {
            return this.message.split('').reverse().join('')
        },
        now2: function() {
            return Date.now()
        }
    },
    methods: {
        now: function () {
          return Date.now()
        }
    }
})


