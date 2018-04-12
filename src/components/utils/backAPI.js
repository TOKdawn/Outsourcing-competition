module.exports = {

    getText(vue) {
        return vue.$axios.get('http://fr13nds.xyz:3300/api/number')
    }

}