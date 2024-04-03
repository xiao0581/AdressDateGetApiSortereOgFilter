const baseUrl = "https://api.dataforsyningen.dk/adresser"
Vue.createApp({
    data() {
        return {
            adress: null,
            message: null,
            alldresses: null,
            adressebetegnelse: null
        }
    },

    methods: {
        async getAdress() {
            const query = "Allerød"
        
            console.log(query)
            try {
                const response = await axios.get(baseUrl, {
                    params: {
                        //struktur: mini,
                        q: query,
                    },
                });
                this.alldresses = await response.data
                this.adress = this.alldresses
                console.log(this.adress)
            } catch (e) {
                this.message = e.message
            }

        },

        filter(adressebetegnelse) {

            this.adress=this.alldresses.filter(a => a.adressebetegnelse.startsWith(adressebetegnelse))

        },
        sortBy() {
            this.adress.sort((adress1, adress2) =>
            adress2.adressebetegnelse.localeCompare(adress1.adressebetegnelse))
        },
    }
    




    
}).mount('#app');