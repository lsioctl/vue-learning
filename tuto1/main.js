const app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    }
})

const app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'You loaded this page on ' + new Date().toLocaleString()
    }
})

const app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
})

const app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text: 'Learn Vue'},
            { text: 'Learn Vuex'}
        ]
    }
})

const app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'This is awesome',
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
})

const app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'some input',
    }
})

// Define a new component called todo-item
Vue.component('todo-item', {
    // The todo-item component now accepts a
    // "prop", which is like a custom attribute.
    // This prop is called todo.
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

const app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            { id: 0, text: 'Vegetables' },
            { id: 1, text: 'Cheese' },
            { id: 2, text: 'Whatever else humans are supposed to eat' }
        ]
    }
})


