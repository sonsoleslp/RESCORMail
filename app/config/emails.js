import {printDate} from '../assets/javascripts/Date.js';

let emails = [
  {
    from:"swr5w@sdfa.es",
    picture:"https://loremflickr.com/320/240?lock=2",
    name:"Nombre Apellido",
    issue:"Asunto del email bla bla bla bla o del email o del email o del email o del email o del email o del email",
    description:"Descripción del mail blabla blaaa",
    content:"Aliquam ut sapien nec dolor finibus euismod commodo nec tortor. Curabitur euismod est et tellus commodo dapibus. In faucibus tristique ante. Duis bibendum risus ex, ut placerat dui aliquet nec. Mauris euismod, sapien et auctor lacinia, lorem mauris dapibus velit, ut sollicitudin lacus tellus nec eros. Nunc eget quam elit. Vivamus sit amet consequat ipsum. Vestibulum vel odio consectetur, dignissim turpis quis, volutpat dui.\n Aliquam ut sapien nec dolor finibus euismod commodo nec tortor. Curabitur euismod est et tellus commodo dapibus. In faucibus tristique ante. Duis bibendum risus ex, ut placerat dui aliquet nec. Mauris euismod, sapien et auctor lacinia, lorem mauris dapibus velit, ut sollicitudin lacus tellus nec eros. Nunc eget quam elit. Vivamus sit amet consequat ipsum. Vestibulum vel odio consec tetur, dignissim turpis quis, volutpat dui.\n Aliquam ut sapien nec dolor finibus euismod commodo nec tortor. Curabitur euismod est et tellus commodo dapibus. In faucibus tristique ante. Duis bibendum risus ex, ut placerat dui aliquet nec. Mauris euismod, sapien et auctor lacinia, lorem mauris dapibus velit, ut sollicitudin lacus tellus nec eros. Nunc eget quam elit. Vivamus sit amet consequat ipsum. Vestibulum vel odio consectetur, dignissim turpis quis, volutpat dui.\n Aliquam ut sapien nec dolor finibus euismod commodo nec tortor. Curabitur euismod est et tellus commodo dapibus. In faucibus tristique ante. Duis bibendum risus ex, ut placerat dui aliquet nec. Mauris euismod, sapien et auctor lacinia, lorem mauris dapibus velit, ut sollicitudin lacus tellus nec eros. Nunc eget quam elit. Vivamus sit amet consequat ipsum. Vestibulum vel odio consectetur, dignissim turpis quis, volutpat dui.\n Aliquam ut sapien nec dolor finibus euismod commodo nec tortor. Curabitur euismod est et tellus commodo dapibus. In faucibus tristique ante. Duis bibendum risus ex, ut placerat dui aliquet nec. Mauris euismod, sapien et auctor lacinia, lorem mauris dapibus velit, ut sollicitudin lacus tellus nec eros. Nunc eget quam elit. Vivamus sit amet consequat ipsum. Vestibulum vel odio consectetur, dignissim turpis quis, volutpat dui.\n Aliquam ut sapien nec dolor finibus euismod commodo nec tortor. Curabitur euismod est et tellus commodo dapibus. In faucibus tristique ante. Duis bibendum risus ex, ut placerat dui aliquet nec. Mauris euismod, sapien et auctor lacinia, lorem mauris dapibus velit, ut sollicitudin lacus tellus nec eros. Nunc eget quam elit. Vivamus sit amet consequat ipsum. Vestibulum vel odio consectetur, dignissim turpis quis, volutpat dui.\n Aliquam ut sapien nec dolor finibus euismod commodo nec tortor. Curabitur euismod est et tellus commodo dapibus. In faucibus tristique ante. Duis bibendum risus ex, ut placerat dui aliquet nec. Mauris euismod, sapien et auctor lacinia, lorem mauris dapibus velit, ut sollicitudin lacus tellus nec eros. Nunc eget quam elit. Vivamus sit amet consequat ipsum. Vestibulum vel odio consectetur, dignissim turpis quis, volutpat dui.\n",
    date:printDate(0),
    categories:["received", "highlighted"],
    unread:true,
    attachment:{title:"file.pdf", url:"http://www.upm.es"},
  }, {
    from:"asdad@3423erwr.es",
    picture:"https://loremflickr.com/320/240?lock=3",
    name:"Nombre Apellido",
    issue:"Asunto del email bla bla bla bla",
    description:"Descripción del mail blabla blaaa Descripción del mail blabla blaaa Descripción del mail blabla blaaa Descripción del mail blabla blaaa Descripción del mail blabla blaaa Descripción del mail blabla blaaa Descripción del mail blabla blaaa Descripción del mail blabla blaaa",
    content:"asdfa<br/> dfsdaf\n asdfsdafsda",
    date:printDate(-1),
    categories:["received"],
    unread:false,
  },
  {
    from:"vfvfdv@u124.es",
    picture:"https://loremflickr.com/320/240?lock=4",
    name:"Nombre Apellido",
    issue:"Asunto del email bla bla bla bla",
    description:"Descripción del mail blabla blaaa",
    content:"vdsvsvdsv<br/> dfsdafvsdvsdv\n asdfsdafsda",
    date:"15-11-2018",
    categories:["received"],
  },
  {
    from:"vfvfdv@u124.es",
    picture:"https://loremflickr.com/320/240?lock=5",
    name:"Nombre Apellido",
    issue:"Asunto del email bla bla bla bla",
    description:"Descripción del mail blabla blaaa",
    content:"vdsvsvdsv<br/> dfsdafvsdvsdv\n asdfsdafsda",
    date:"15-11-2018",
    categories:["received"],
  },
  {
    from:"vfvfdv@u124.es",
    picture:"https://loremflickr.com/320/240?lock=6",
    name:"Nombre Apellido",
    issue:"Asunto del email bla bla bla bla",
    description:"Descripción del mail blabla blaaa",
    content:"vdsvsvdsv<br/> dfsdafvsdvsdv\n asdfsdafsda",
    date:"15-11-2018",
    categories:["received"],
  },
  {
    from:"vfvfdv@u124.es",
    picture:"https://loremflickr.com/320/240?lock=7",
    name:"Nombre Apellido",
    issue:"Asunto del email bla bla bla bla",
    description:"Descripción del mail blabla blaaa",
    content:"vdsvsvdsv<br/> dfsdafvsdvsdv\n asdfsdafsda",
    date:"15-11-2018",
  },
  {
    from:"vfvfdv@u124.es",
    picture:"https://loremflickr.com/320/240?lock=7",
    name:"Nombre Apellido",
    issue:"Asunto del email bla bla bla bla",
    description:"Descripción del mail blabla blaaa",
    content:"vdsvsvdsv<br/> dfsdafvsdvsdv\n asdfsdafsda",
    date:"15-11-2018",
  },
  {
    from:"vfvfdv@u124.es",
    picture:"https://loremflickr.com/320/240?lock=7",
    name:"Nombre Apellido",
    issue:"Asunto del email bla bla bla bla",
    description:"Descripción del mail blabla blaaa",
    content:"vdsvsvdsv<br/> dfsdafvsdvsdv\n asdfsdafsda",
    date:"15-11-2018",
  },
];

export default emails;