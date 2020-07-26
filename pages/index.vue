<template>
    <div>
        <v-main>
            <HeaderCenter />
            <Cards />
            <Slider />
            <CardsVideos />
            <Demo />
            <v-container>
            <TryIt />
            </v-container>
            <Posts />
        </v-main>
    </div>
</template>

<script>
import HeaderCenter from './HeaderCenter';
import Cards from './CardsAligned';
import Slider from './SliderCard';
import CardsVideos from './CardsVideos';
import Demo from './Demo';
import TryIt from './TryIt';
import Posts from './blogPosts';
export default {
    head() {
        return{
        // eslint-disable-next-line no-useless-concat
  meta: [
    { vmid: 'description', name: 'description', content: 'Saluttem, venta de equipo para la salud como cubrebocas KN95, mascarilla triple capa plisado, tela SMS, Sanitizantes, desinfectantes, caretas de distintos tipos, mayoreo y menudeo' },
    { property: 'og:title', content: "Productos para cuidar de ti"},
    { property: 'og:description', content: "Saluttem, venta de equipo para la salud como cubrebocas KN95, mascarilla triple capa plisado, tela SMS, Sanitizantes, desinfectantes, caretas de distintos tipos, mayoreo y menudeo"},
    { property: 'og:image', content: "https://i.ibb.co/g6m1SC1/1.png"},
    { property: 'og:url', content: "https://www.saluttem.com"},
    { property: 'og:type', content: "website"},
    { name:'keywords', content: 'kn95, cubrebocas puebla, caretas, mascarillas, triple plisado, kn95 mayoreo puebla, cubrebocas kn95, desinfectante puebla, sanitizante puebla, tapete desifectante, gel antibacterial'}
  ]

        }
    },
  jsonld() {
    return {
"@context": "http://www.schema.org",
  "@type": "HealthAndBeautyBusiness",
  "image": [
        "https://i.ibb.co/H7jm1ps/Por-un-mundo-m-s-sano.png",
        "https://i.ibb.co/C8FrMJg/1.png",
        "https://saluttem.com/equipo.jpg"
  ],
  "name": "Saluttem",
  "url": "https://www.saluttem.com/",
  "sameAs": [
     "https://www.facebook.com/saluttem"
  ],
  "telephone": "522228319799",
  "logo": "https://i.ibb.co/BPjkZJ4/drawer.png",
  "priceRange": "$$$",
  "currenciesAccepted": ["MXN", "BTC"],
  "paymentAccepted":"Cash, Credit Card",
  "paymentAccepted":"Cash, Credit Card",
  "description": "Saluttem, venta de equipo para la salud como cubrebocas KN95, mascarilla triple capa plisado, tela SMS, Sanitizantes, desinfectantes, caretas de distintos tipos, mayoreo y menudeo",
  "address": {
     "@type": "PostalAddress",
     "streetAddress": "Av 5 Ote 612, Centro",
     "addressLocality": "Puebla",
     "addressRegion": "PUE",
     "postalCode": "72000",
     "addressCountry": "MX"

  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "11"
  },
  "review": [
    {
      "@type": "Review",
      "author": "Ellie",
      "datePublished": "2011-04-01",
      "description": "Excelente productos.",
      "name": "Yei",
      "reviewRating": {
        "@type": "Rating",
        "bestRating": "5",
        "ratingValue": "5",
        "worstRating": "1"
      }
    },
    {
      "@type": "Review",
      "author": "Lucas",
      "datePublished": "2011-03-25",
      "description": "En tiempo y forma.",
      "name": "Value purchase",
      "reviewRating": {
        "@type": "Rating",
        "bestRating": "5",
        "ratingValue": "4",
        "worstRating": "1"
      }
    }
  ],
   "openingHours": "Mo 07:00-06:00 Tu 07:00-05:00 We 07:00-18:30 Th 07:00-18:30 Fr 07:00-18:30 Sa 07:00-18:30 Su 01:00-01:00"
    };
  },    
    components: {
        HeaderCenter,
        Cards,
        Slider,
        CardsVideos,
        Demo,
        TryIt,
        Posts
    }
}
</script>
