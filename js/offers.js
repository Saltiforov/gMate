var app = new Vue({
  el: '#offers-app',
  data: {
    offers: [],
    specializations: [],
    selected: null,
    opened: false,
    selectedOffer: null,
  },
  created() {
    axios
      .get('https://gmate-proxy.c.new.roky.rocks/api/offers/preview')
      .then((response) => {
        this.offers = response.data.offers
        this.specializations = response.data.specializations
      })
  },
  computed: {
    selectedSpec(){
      return this.specializations.find((item) => item.value === this.selected)
    },
    moreOffers() {
      if (!this.selectedSpec) return 0
      return this.selectedSpec.count - this.offers.length
    },
  },
  methods: {
    select(value) {
      this.selected = value

      axios
        .get('https://gmate-proxy.c.new.roky.rocks/api/offers/preview' + (value ? '?s=' + value : '' ))
        .then((response) => {
          this.offers = []
          this.specializations = response.data.specializations
          setTimeout(() => {
            this.offers = response.data.offers
          }, 300)
        })
    },
    selectOffer(item) {
      document.body.classList.remove('initial')
      document.body.classList.add('hidden')

      this.selectedOffer = item
      this.opened = true
    },
    close() {
      document.body.classList.add('initial')
      document.body.classList.remove('hidden')

      this.opened = false
    },
    numberWithSpaces(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
    }
  }
})
