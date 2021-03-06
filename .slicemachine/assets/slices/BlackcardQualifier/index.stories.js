import MyComponent from '../../../../slices/BlackcardQualifier';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/BlackcardQualifier'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"blackcard_qualifier","items":[{"tag":"exploit strategic convergence"},{"tag":"streamline granular systems"},{"tag":"iterate magnetic infomediaries"},{"tag":"utilize next-generation metrics"}],"primary":{"slug":"e-enable e-business users","title":"engage sticky portals","tagStepTitle":"whiteboard proactive relationships","tagDescription":[{"type":"paragraph","text":"Deserunt eu officia voluptate sunt sint id deserunt.","spans":[]}],"contactStepTitle":"grow B2C platforms","contactDescription":[{"type":"paragraph","text":"Minim magna cillum sit nostrud cupidatat non deserunt ullamco enim amet ea dolore sunt. Excepteur consectetur eiusmod duis culpa tempor irure officia irure. Amet voluptate sunt dolore ut magna nulla commodo eu officia fugiat.","spans":[]}],"prevLabel":"mesh next-generation convergence","nextLabel":"cultivate 24/365 infomediaries","submitLabel":"incubate 24/365 web services"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
