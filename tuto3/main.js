const watchExample = new Vue({
    el: '#watch-example',
    data: {
        question: '',
        answer: 'I cannot give you an answer until you ask a question!'
    },
    watch: {
        question: function() {
            // whenever question changes, this function will run
            this.answer = 'Waiting you to end typing your question'
            setTimeout(() => {
                // here the arrow if powerfull, we can get the this of
                // the parent
                this.getAnswer()
            }, 500);
        }
    },
    methods: {
        getAnswer: function () {
            if (this.question.indexOf('?') === -1) {
                this.answer = 'Questions usually contain a question mark. ;-)'
                return
            }
            this.answer = 'Thinking...'
            this.getApiResponse()
        },
        getApiResponse: async function() {
            try {
                const response = await axios.get('https://yesno.wtf/api');
                this.answer = response.data.answer
            } catch (error) {
                console.error(error);
            }
        }
    }
})



