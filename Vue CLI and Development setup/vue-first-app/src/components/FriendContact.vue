<template>
    <li>
        <h2>{{ friend.name }}</h2>
        <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }}</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong>{{ friend.phone }}</li>
            <li><strong>Email:</strong>{{ friend.email }}</li>
        </ul>
    </li>
</template>

<script>
export default {
    data() {
        return {
            detailsAreVisible: true,
            friend: {
                id: 'pragnya',
                name: 'Pragnya YS',
                phone: '9999999999',
                email: 'pragnya@vue.com'
            }
        };
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }

    
};
</script>