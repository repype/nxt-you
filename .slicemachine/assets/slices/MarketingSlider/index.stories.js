import MyComponent from '../../../../slices/MarketingSlider';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/MarketingSlider'
}


export const _DefaultSlice = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"marketing_slider","items":[{"title":"repurpose open-source schemas","description":[{"type":"paragraph","text":"Nisi sunt anim mollit est eiusmod labore est sint ea.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1560457079-9a6532ccb118?w=900&h=500&fit=crop"},"video":"evolve web-enabled partnerships"},{"title":"deploy bleeding-edge networks","description":[{"type":"paragraph","text":"Reprehenderit dolore pariatur commodo cillum.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?w=900&h=500&fit=crop"},"video":"incubate cutting-edge schemas"},{"title":"whiteboard viral bandwidth","description":[{"type":"paragraph","text":"Occaecat deserunt sint aute cupidatat ut reprehenderit id nisi est pariatur in eu.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587905069134-008460d7a636?w=900&h=500&fit=crop"},"video":"disintermediate cross-platform mindshare"},{"title":"morph enterprise supply-chains","description":[{"type":"paragraph","text":"Nulla commodo culpa est quis laborum minim anim ea nostrud magna eiusmod commodo pariatur qui. Reprehenderit laboris do laboris officia ullamco exercitation est culpa commodo.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=900&h=500&fit=crop"},"video":"e-enable user-centric infrastructures"}],"primary":{"autoplaySpeed":708},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'