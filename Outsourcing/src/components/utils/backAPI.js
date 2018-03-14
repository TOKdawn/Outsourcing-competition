import Vue from 'vue'
module.exports = {
    getText(vue) {
        return Vue.axios.get(
            `https://api.github.com/repos/${vue.$store.getters.context}/labels`
        )
    }
}