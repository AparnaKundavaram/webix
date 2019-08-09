var grid1 = {
    view:"datatable",
    columns:[
      { id:"rank",	header:"", css:"rank",  		width:50},
      { id:"title",	header:"Film title", fillspace:true },
      { id:"year",	header:"Released" , width:80},
      { id:"votes",	header:"Votes", 	width:100}
    ],
    autoheight:true,
    scroll:false,
    data: [
      { id:1, title:"The Shawshank Redemption", year:1994, votes:678790, rating:9.2, rank:1},
      { id:2, title:"The Godfather", year:1972, votes:511495, rating:9.2, rank:2}
    ]
  };	
  
  var grid2 = {
    view:"datatable",
    columns:[
      { id:"rank",	header:"", css:"rank",  		width:50},
      { id:"title",	header:"Film title", fillspace:true },
      { id:"year",	header:"Released" , width:80},
      { id:"votes",	header:"Votes", 	width:100}
    ],
    autoheight:true,
    scroll:false,  
    datatype:"xml",
    data:'<data><item id="1" title="The Shawshank Redemption" year="1994" votes="678790" rating="9.2" rank="1" /><item id="2" title="The Godfather" year="1972" votes="511495" rating="9.2" rank="2" /></data>' 
  };	
  
  
  var grid3 = {
    view:"datatable",
    columns:[
      { id:"data5",	header:"", css:"rank",  		width:50},
      { id:"data1",	header:"Film title", fillspace:true },
      { id:"data2",	header:"Released" , width:80},
      { id:"data3",	header:"Votes", 	width:100}
    ],
    autoheight:true,
    scroll:false, 
    datatype:"csv",
    data:'1,The Shawshank Redemption,1994,678790,9.2,1\n2,The Godfather,1972,511495,9.2,2'
  };	
  
  var grid4 = {
    view:"datatable",
    columns:[
      { id:"data5",	header:"", css:"rank",  		width:50},
      { id:"data1",	header:"Film title", fillspace:true },
      { id:"data2",	header:"Released" , width:80},
      { id:"data3",	header:"Votes", 	width:100}
    ],
    autoheight:true,
    scroll:false, 
    datatype:"jsarray",
    data:[
      [1,"The Shawshank Redemption",1994,678790,9.2,1],
      [2,"The Godfather",1972,511495,9.2,2]
    ]
  };
   
  webix.ui({
    rows:[
      {view:"label", label:"JSON"},
      grid1,
      {view:"label", label:"XML"},
      grid2,
      {view:"label", label:"CSV"},
      grid3,
      {view:"label", label:"jsArray"},
      grid4,
      {}
    ]
  });                 
          