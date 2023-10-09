const Discord = require("discord.js")
const { pagination } = require('djs-reaction-collector')
var page = 1;
const sqlite = require('sqlite3').verbose()
let db = new sqlite.Database('./botdb.db')


module.exports = {

  name: 'shop',
  description: 'shop command',
 async execute(message, args){
    {
      
   //Page 1 - Welcome Page
     const page1 = new Discord.MessageEmbed()
   {
    page1.setTitle("Shop")
    page1.setColor(0xff0000)
    page1.setDescription("Welcome to the character shop!")
      }


  //Page 2 - Captain America
    const page2 = new Discord.MessageEmbed()
{
    await db.get('SELECT * FROM cards WHERE cardID = 1;', function(err, row) {
      ca_callback(row);   
  })

    function ca_callback(row) {
     var x = row.cardPrice
     let name = row.cardName
     let dmg = row.cardDamage
     let hp = row.cardHP
     let img = row.cardImage
     page2.addField('Name:', name, true)
     page2.addField('HP: ',hp, true)
     page2.addField('Damage: ', dmg , true)
     page2.addField('Price: ', x, true)
     page2.addField('Buy Command:', 'sbbuycaptainamerica', true)
     page2.setImage(img)
    }

    page2.setTitle("Shop")
    page2.setColor(0xff0000)
   
  }

  
  //Page 3 - Iron Man
    const page3 = new Discord.MessageEmbed()
{

  await db.get('SELECT * FROM cards WHERE cardID = 2;', function(err, row) {
    im_callback(row);   
})

    function im_callback(row) {
      var x = row.cardPrice
      let name = row.cardName
      let dmg = row.cardDamage
      let hp = row.cardHP
      let img = row.cardImage
      page3.addField('Name:', name, true)
      page3.addField('HP: ',hp, true)
      page3.addField('Damage: ', dmg , true)
      page3.addField('Price: ', x, true)
      page3.addField('Buy Command:', 'sbbuyironman', true)
      page3.setImage(img)
     }

     page3.setTitle('Shop')
     page3.setColor(0xff0000)

    }


//Page 4 - Hulk
    const page4 = new Discord.MessageEmbed()
{ 
  await db.get('SELECT * FROM cards WHERE cardID = 3;', function(err, row) {
    hulk_callback(row);   
})

    function hulk_callback(row) {
      var x = row.cardPrice
      let name = row.cardName
      let dmg = row.cardDamage
      let hp = row.cardHP
      let img = row.cardImage
      page4.addField('Name:', name, true)
      page4.addField('HP: ',hp, true)
      page4.addField('Damage: ', dmg , true)
      page4.addField('Price: ', x, true)
      page4.addField('Buy Command:', 'sbbuyhulk', true)
      page4.setImage(img)
     }

     page4.setTitle('Shop')
     page4.setColor(0xff0000)

    }


//Page 5 - Thor
    const page5 = new Discord.MessageEmbed()
{

  await db.get('SELECT * FROM cards WHERE cardID = 4;', function(err, row) {
    thor_callback(row);   
})

    function thor_callback(row) {
      var x = row.cardPrice
      let name = row.cardName
      let dmg = row.cardDamage
      let hp = row.cardHP
      let img = row.cardImage
      page5.addField('Name:', name, true)
      page5.addField('HP: ',hp, true)
      page5.addField('Damage: ', dmg , true)
      page5.addField('Price: ', x, true)
      page5.addField('Buy Command:', 'sbbuythor', true)
      page5.setImage(img)
     }

     page5.setTitle('Shop')
     page5.setColor(0xff0000)

    }


//Page 6 - Black Widow
const page6 = new Discord.MessageEmbed()
{

  await db.get('SELECT * FROM cards WHERE cardID = 5;', function(err, row) {
    bw_callback(row);   
  })
  

    function bw_callback(row) {
      var x = row.cardPrice
      let name = row.cardName
      let dmg = row.cardDamage
      let hp = row.cardHP
      let img = row.cardImage
      page6.addField('Name:', name, true)
      page6.addField('HP: ',hp, true)
      page6.addField('Damage: ', dmg , true)
      page6.addField('Price: ', x, true)
      page6.addField('Buy Command:', 'sbbuyblackwidow', true)
      page6.setImage(img)
     }

     page6.setTitle('Shop')
     page6.setColor(0xff0000)

  }

//Page 7 - Hawkeye 
  const page7 = new Discord.MessageEmbed()
{

  await db.get('SELECT * FROM cards WHERE cardID = 6;', function(err, row) {
    he_callback(row);   
  })
  

    function he_callback(row) {
      var x = row.cardPrice
      let name = row.cardName
      let dmg = row.cardDamage
      let hp = row.cardHP
      let img = row.cardImage
      page7.addField('Name:', name, true)
      page7.addField('HP: ',hp, true)
      page7.addField('Damage: ', dmg , true)
      page7.addField('Price: ', x, true)
      page7.addField('Buy Command:', 'sbbuyhawkeye', true)
      page7.setImage(img)
     }

     page7.setTitle('Shop')
     page7.setColor(0xff0000)

  }

//Page 8 - Nick Fury 
const page8 = new Discord.MessageEmbed()
{

  await db.get('SELECT * FROM cards WHERE cardID = 7;', function(err, row) {
    nf_callback(row);   
  })
  

    function nf_callback(row) {
      var x = row.cardPrice
      let name = row.cardName
      let dmg = row.cardDamage
      let hp = row.cardHP
      let img = row.cardImage
      page8.addField('Name:', name, true)
      page8.addField('HP: ',hp, true)
      page8.addField('Damage: ', dmg , true)
      page8.addField('Price: ', x, true)
      page8.addField('Buy Command:', 'sbbuynickfury', true)
      page8.setImage(img)
     }

     page8.setTitle('Shop')
     page8.setColor(0xff0000)

  }
  
//Page 9 - Ant-Man
const page9 = new Discord.MessageEmbed()
{

  await db.get('SELECT * FROM cards WHERE cardID = 8;', function(err, row) {
    am_callback(row);   
  })
  

    function am_callback(row) {
      var x = row.cardPrice
      let name = row.cardName
      let dmg = row.cardDamage
      let hp = row.cardHP
      let img = row.cardImage
      page9.addField('Name:', name, true)
      page9.addField('HP: ',hp, true)
      page9.addField('Damage: ', dmg , true)
      page9.addField('Price: ', x, true)
      page9.addField('Buy Command:', 'sbbuyantman', true)
      page9.setImage(img)
     }

     page9.setTitle('Shop')
     page9.setColor(0xff0000)

  }


  //Page 10 - Dr. Strange
const page10 = new Discord.MessageEmbed()
{

  await db.get('SELECT * FROM cards WHERE cardID = 9;', function(err, row) {
    drstrange_callback(row);   
  })
  

    function drstrange_callback(row) {
      var x = row.cardPrice
      let name = row.cardName
      let dmg = row.cardDamage
      let hp = row.cardHP
      let img = row.cardImage
      page10.addField('Name:', name, true)
      page10.addField('HP: ',hp, true)
      page10.addField('Damage: ', dmg , true)
      page10.addField('Price: ', x, true)
      page10.addField('Buy Command:', 'sbbuydrstrange', true)
      page10.setImage(img)
     }

     page10.setTitle('Shop')
     page10.setColor(0xff0000)

  }

   //Page 11 - Spider Man
const page11 = new Discord.MessageEmbed()
{

  await db.get('SELECT * FROM cards WHERE cardID = 10;', function(err, row) {
    spiderman_callback(row);   
  })
  

    function spiderman_callback(row) {
      var x = row.cardPrice
      let name = row.cardName
      let dmg = row.cardDamage
      let hp = row.cardHP
      let img = row.cardImage
      page11.addField('Name:', name, true)
      page11.addField('HP: ',hp, true)
      page11.addField('Damage: ', dmg , true)
      page11.addField('Price: ', x, true)
      page11.addField('Buy Command:', 'sbbuyspiderman', true)
      page11.setImage(img)
     }

     page11.setTitle('Shop')
     page11.setColor(0xff0000)

  }

     //Page 12 - Wasp
const page12 = new Discord.MessageEmbed()
{

  await db.get('SELECT * FROM cards WHERE cardID = 11;', function(err, row) {
    wasp_callback(row);   
  })
  

    function wasp_callback(row) {
      var x = row.cardPrice
      let name = row.cardName
      let dmg = row.cardDamage
      let hp = row.cardHP
      let img = row.cardImage
      page12.addField('Name:', name, true)
      page12.addField('HP: ',hp, true)
      page12.addField('Damage: ', dmg , true)
      page12.addField('Price: ', x, true)
      page12.addField('Buy Command:', 'sbbuywasp', true)
      page12.setImage(img)
     }

     page12.setTitle('Shop')
     page12.setColor(0xff0000)

  }

      //Page 13 - Black Panther
const page13 = new Discord.MessageEmbed()
{

  await db.get('SELECT * FROM cards WHERE cardID = 12;', function(err, row) {
    bp_callback(row);   
  })
  

    function bp_callback(row) {
      var x = row.cardPrice
      let name = row.cardName
      let dmg = row.cardDamage
      let hp = row.cardHP
      let img = row.cardImage
      page13.addField('Name:', name, true)
      page13.addField('HP: ',hp, true)
      page13.addField('Damage: ', dmg , true)
      page13.addField('Price: ', x, true)
      page13.addField('Buy Command:', 'sbbuyblackpanther', true)
      page13.setImage(img)
     }

     page13.setTitle('Shop')
     page13.setColor(0xff0000)

  }

       //Page 14 - Vision
const page14 = new Discord.MessageEmbed()
{

  await db.get('SELECT * FROM cards WHERE cardID = 13;', function(err, row) {
    vision_callback(row);   
  })
  

    function vision_callback(row) {
      var x = row.cardPrice
      let name = row.cardName
      let dmg = row.cardDamage
      let hp = row.cardHP
      let img = row.cardImage
      page14.addField('Name:', name, true)
      page14.addField('HP: ',hp, true)
      page14.addField('Damage: ', dmg , true)
      page14.addField('Price: ', x, true)
      page14.addField('Buy Command:', 'sbbuyvision', true)
      page14.setImage(img)
     }

     page14.setTitle('Shop')
     page14.setColor(0xff0000)

  }

      //Page 15 - Thanos
const page15 = new Discord.MessageEmbed()
{
      
        await db.get('SELECT * FROM cards WHERE cardID = 14;', function(err, row) {
          thanos_callback(row);   
        })
        
      
          function thanos_callback(row) {
            var x = row.cardPrice
            let name = row.cardName
            let dmg = row.cardDamage
            let hp = row.cardHP
            let img = row.cardImage
            page15.addField('Name:', name, true)
            page15.addField('HP: ',hp, true)
            page15.addField('Damage: ', dmg , true)
            page15.addField('Price: ', x, true)
            page15.addField('Buy Command:', 'sbbuythanos', true)
            page15.setImage(img)
           }
      
           page15.setTitle('Shop')
           page15.setColor(0xff0000)
      
  }
      
    //Page 16 - Loki
const page16 = new Discord.MessageEmbed()
{
    
      await db.get('SELECT * FROM cards WHERE cardID = 15;', function(err, row) {
        loki_callback(row);   
      })
      
    
        function loki_callback(row) {
          var x = row.cardPrice
          let name = row.cardName
          let dmg = row.cardDamage
          let hp = row.cardHP
          let img = row.cardImage
          page16.addField('Name:', name, true)
          page16.addField('HP: ',hp, true)
          page16.addField('Damage: ', dmg , true)
          page16.addField('Price: ', x, true)
          page16.addField('Buy Command:', 'sbbuyloki', true)
          page16.setImage(img)
         }
    
         page16.setTitle('Shop')
         page16.setColor(0xff0000)
    
  }


  //Page 17 - Mantis
  const page17 = new Discord.MessageEmbed()
  {
      
        await db.get('SELECT * FROM cards WHERE cardID = 16;', function(err, row) {
          mantis_callback(row);   
        })
        
      
          function mantis_callback(row) {
            var x = row.cardPrice
            let name = row.cardName
            let dmg = row.cardDamage
            let hp = row.cardHP
            let img = row.cardImage
            page17.addField('Name:', name, true)
            page17.addField('HP: ',hp, true)
            page17.addField('Damage: ', dmg , true)
            page17.addField('Price: ', x, true)
            page17.addField('Buy Command:', 'sbbuymantis', true)
            page17.setImage(img)
           }
      
           page17.setTitle('Shop')
           page17.setColor(0xff0000)
      
    }


  //Page 18 - Rocket
  const page18 = new Discord.MessageEmbed()
  {
      
        await db.get('SELECT * FROM cards WHERE cardID = 17;', function(err, row) {
          rocket_callback(row);   
        })
        
      
          function rocket_callback(row) {
            var x = row.cardPrice
            let name = row.cardName
            let dmg = row.cardDamage
            let hp = row.cardHP
            let img = row.cardImage
            page18.addField('Name:', name, true)
            page18.addField('HP: ',hp, true)
            page18.addField('Damage: ', dmg , true)
            page18.addField('Price: ', x, true)
            page18.addField('Buy Command:', 'sbbuyrocket', true)
            page18.setImage(img)
           }
      
           page18.setTitle('Shop')
           page18.setColor(0xff0000)
      
    }


 //Page 19 - Drax
 const page19 = new Discord.MessageEmbed()
 {
     
       await db.get('SELECT * FROM cards WHERE cardID = 18;', function(err, row) {
         drax_callback(row);   
       })
       
     
         function drax_callback(row) {
           var x = row.cardPrice
           let name = row.cardName
           let dmg = row.cardDamage
           let hp = row.cardHP
           let img = row.cardImage
           page19.addField('Name:', name, true)
           page19.addField('HP: ',hp, true)
           page19.addField('Damage: ', dmg , true)
           page19.addField('Price: ', x, true)
           page19.addField('Buy Command:', 'sbbuydrax', true)
           page19.setImage(img)
          }
     
          page19.setTitle('Shop')
          page19.setColor(0xff0000)
     
   }


 //Page 20 - Shuri
 const page20 = new Discord.MessageEmbed()
 {
     
       await db.get('SELECT * FROM cards WHERE cardID = 19;', function(err, row) {
        shuri_callback(row);   
       })
       
     
         function shuri_callback(row) {
           var x = row.cardPrice
           let name = row.cardName
           let dmg = row.cardDamage
           let hp = row.cardHP
           let img = row.cardImage
           page20.addField('Name:', name, true)
           page20.addField('HP: ',hp, true)
           page20.addField('Damage: ', dmg , true)
           page20.addField('Price: ', x, true)
           page20.addField('Buy Command:', 'sbbuyshuri', true)
           page20.setImage(img)
          }
     
          page20.setTitle('Shop')
          page20.setColor(0xff0000)
     
   }

 //Page 21 - Star-Lord
 const page21 = new Discord.MessageEmbed()
 {
     
       await db.get('SELECT * FROM cards WHERE cardID = 20;', function(err, row) {
        sl_callback(row);   
       })
       
     
         function sl_callback(row) {
           var x = row.cardPrice
           let name = row.cardName
           let dmg = row.cardDamage
           let hp = row.cardHP
           let img = row.cardImage
           page21.addField('Name:', name, true)
           page21.addField('HP: ',hp, true)
           page21.addField('Damage: ', dmg , true)
           page21.addField('Price: ', x, true)
           page21.addField('Buy Command:', 'sbbuystarlord', true)
           page21.setImage(img)
          }
     
          page21.setTitle('Shop')
          page21.setColor(0xff0000)
     
   }


 //Page 22 - Groot
 const page22 = new Discord.MessageEmbed()
 {
     
       await db.get('SELECT * FROM cards WHERE cardID = 21;', function(err, row) {
       groot_callback(row);   
       })
       
     
         function groot_callback(row) {
           var x = row.cardPrice
           let name = row.cardName
           let dmg = row.cardDamage
           let hp = row.cardHP
           let img = row.cardImage
           page22.addField('Name:', name, true)
           page22.addField('HP: ',hp, true)
           page22.addField('Damage: ', dmg , true)
           page22.addField('Price: ', x, true)
           page22.addField('Buy Command:', 'sbbuygroot', true)
           page22.setImage(img)
          }
     
          page22.setTitle('Shop')
          page22.setColor(0xff0000)
     
   }


 //Page 23 - Wong
 const page23 = new Discord.MessageEmbed()
 {
     
       await db.get('SELECT * FROM cards WHERE cardID = 22;', function(err, row) {
       wong_callback(row);   
       })
       
     
         function wong_callback(row) {
           var x = row.cardPrice
           let name = row.cardName
           let dmg = row.cardDamage
           let hp = row.cardHP
           let img = row.cardImage
           page23.addField('Name:', name, true)
           page23.addField('HP: ',hp, true)
           page23.addField('Damage: ', dmg , true)
           page23.addField('Price: ', x, true)
           page23.addField('Buy Command:', 'sbbuywong', true)
           page23.setImage(img)
          }
     
          page23.setTitle('Shop')
          page23.setColor(0xff0000)
     
   }


 //Page 24 - Falcon
 const page24 = new Discord.MessageEmbed()
 {
     
       await db.get('SELECT * FROM cards WHERE cardID = 23;', function(err, row) {
       falcon_callback(row);   
       })
       
     
         function falcon_callback(row) {
           var x = row.cardPrice
           let name = row.cardName
           let dmg = row.cardDamage
           let hp = row.cardHP
           let img = row.cardImage
           page24.addField('Name:', name, true)
           page24.addField('HP: ',hp, true)
           page24.addField('Damage: ', dmg , true)
           page24.addField('Price: ', x, true)
           page24.addField('Buy Command:', 'sbbuyfalcon', true)
           page24.setImage(img)
          }
     
          page24.setTitle('Shop')
          page24.setColor(0xff0000)
     
   }

   
 //Page 25 - War Machine
 const page25 = new Discord.MessageEmbed()
 {
     
       await db.get('SELECT * FROM cards WHERE cardID = 24;', function(err, row) {
       wm_callback(row);   
       })
       
     
         function wm_callback(row) {
           var x = row.cardPrice
           let name = row.cardName
           let dmg = row.cardDamage
           let hp = row.cardHP
           let img = row.cardImage
           page25.addField('Name:', name, true)
           page25.addField('HP: ',hp, true)
           page25.addField('Damage: ', dmg , true)
           page25.addField('Price: ', x, true)
           page25.addField('Buy Command:', 'sbbuywarmachine', true)
           page25.setImage(img)
          }
     
          page25.setTitle('Shop')
          page25.setColor(0xff0000)
     
   }


//Page 26 - The Winter Soldier
const page26 = new Discord.MessageEmbed()
{
    
      await db.get('SELECT * FROM cards WHERE cardID = 25;', function(err, row) {
      tws_callback(row);   
      })
      
    
        function tws_callback(row) {
          var x = row.cardPrice
          let name = row.cardName
          let dmg = row.cardDamage
          let hp = row.cardHP
          let img = row.cardImage
          page26.addField('Name:', name, true)
          page26.addField('HP: ',hp, true)
          page26.addField('Damage: ', dmg , true)
          page26.addField('Price: ', x, true)
          page26.addField('Buy Command:', 'sbbuythewintersoldier', true)
          page26.setImage(img)
         }
    
         page26.setTitle('Shop')
         page26.setColor(0xff0000)
    
  }


//Page 27 - Valkyrie
const page27 = new Discord.MessageEmbed()
{
    
      await db.get('SELECT * FROM cards WHERE cardID = 26;', function(err, row) {
      valkyrie_callback(row);   
      })
      
    
        function valkyrie_callback(row) {
          var x = row.cardPrice
          let name = row.cardName
          let dmg = row.cardDamage
          let hp = row.cardHP
          let img = row.cardImage
          page27.addField('Name:', name, true)
          page27.addField('HP: ',hp, true)
          page27.addField('Damage: ', dmg , true)
          page27.addField('Price: ', x, true)
          page27.addField('Buy Command:', 'sbbuyvalkyrie', true)
          page27.setImage(img)
         }
    
         page27.setTitle('Shop')
         page27.setColor(0xff0000)
    
  }


 //Page 28 - Nebula
const page28 = new Discord.MessageEmbed()
{
    
      await db.get('SELECT * FROM cards WHERE cardID = 27;', function(err, row) {
      nebula_callback(row);   
      })
      
    
        function nebula_callback(row) {
          var x = row.cardPrice
          let name = row.cardName
          let dmg = row.cardDamage
          let hp = row.cardHP
          let img = row.cardImage
          page28.addField('Name:', name, true)
          page28.addField('HP: ',hp, true)
          page28.addField('Damage: ', dmg , true)
          page28.addField('Price: ', x, true)
          page28.addField('Buy Command:', 'sbbuynebula', true)
          page28.setImage(img)
         }
    
         page28.setTitle('Shop')
         page28.setColor(0xff0000)
    
  }


 //Page 29 - Gamora
const page29 = new Discord.MessageEmbed()
{
    
      await db.get('SELECT * FROM cards WHERE cardID = 28;', function(err, row) {
      gamora_callback(row);   
      })
      
    
        function gamora_callback(row) {
          var x = row.cardPrice
          let name = row.cardName
          let dmg = row.cardDamage
          let hp = row.cardHP
          let img = row.cardImage
          page29.addField('Name:', name, true)
          page29.addField('HP: ',hp, true)
          page29.addField('Damage: ', dmg , true)
          page29.addField('Price: ', x, true)
          page29.addField('Buy Command:', 'sbbuygamora', true)
          page29.setImage(img)
         }
    
         page29.setTitle('Shop')
         page29.setColor(0xff0000)
    
  }


 //Page 30 - Captain Marvel
const page30 = new Discord.MessageEmbed()
{
    
      await db.get('SELECT * FROM cards WHERE cardID = 29;', function(err, row) {
      cm_callback(row);   
      })
      
    
        function cm_callback(row) {
          var x = row.cardPrice
          let name = row.cardName
          let dmg = row.cardDamage
          let hp = row.cardHP
          let img = row.cardImage
          page30.addField('Name:', name, true)
          page30.addField('HP: ',hp, true)
          page30.addField('Damage: ', dmg , true)
          page30.addField('Price: ', x, true)
          page30.addField('Buy Command:', 'sbbuycaptainmarvel', true)
          page30.setImage(img)
         }
    
         page30.setTitle('Shop')
         page30.setColor(0xff0000)
    
  }
  

 //Page 31 - Scarlet Witch
 const page31 = new Discord.MessageEmbed()
 {
     
       await db.get('SELECT * FROM cards WHERE cardID = 30;', function(err, row) {
       sw_callback(row);   
       })
       
     
         function sw_callback(row) {
           var x = row.cardPrice
           let name = row.cardName
           let dmg = row.cardDamage
           let hp = row.cardHP
           let img = row.cardImage
           page31.addField('Name:', name, true)
           page31.addField('HP: ',hp, true)
           page31.addField('Damage: ', dmg , true)
           page31.addField('Price: ', x, true)
           page31.addField('Buy Command:', 'sbbuyscarletwitch', true)
           page31.setImage(img)
          }
     
          page31.setTitle('Shop')
          page31.setColor(0xff0000)
     
   }

      const pages = [
       page1, page2, page3, page4, page5, page6, page7, page8, page9, page10, page11, page12, page13, page14, page15, page16, page17, page18, page19, page20, page21, page22, page23, page24, page25, page26, page27, page28, page29, page30, page31
      ]

      const emoji = ['⬅️', '➡️']

      const timeout = 120000

      pagination(message, pages, emoji, timeout)

}

  }
}