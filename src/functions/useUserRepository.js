import { onMounted, ref } from 'vue'

export default userId => {
    const user = ref({
        name: '',
        age: 0
    })

    const getUser = new Promise((resolve) => {
        setTimeout(() => {

            user.value = {
                userId,
                name: 'Breno',
                age: 17
            }

            resolve()
        }, 2000)
    })

    onMounted(getUser)

    return {
        user: user.value
    }

}