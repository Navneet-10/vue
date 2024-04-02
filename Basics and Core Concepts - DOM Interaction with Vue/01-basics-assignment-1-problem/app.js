const app = Vue.createApp({
    data() { 
        return {
            myName: 'Navneet',
            myAge: 24,
            imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=200:*'
        };
    },
    methods: {
        myAgeAfter (years) {
            return this.myAge + years
        },
        randomNumber () {
            return Math.random()
        }
    }
});

app.mount('#assignment');