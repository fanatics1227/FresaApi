var slap1 = [
    "https://media1.tenor.com/images/6885c7676d8645bf2891138564159713/tenor.gif",
    "https://media1.tenor.com/images/53d180f129f51575a46b6d3f0f5eeeea/tenor.gif",
    "https://media.giphy.com/media/10DRaO76k9sgHC/giphy.gif",
    "https://media.giphy.com/media/Qv7WFppXtkqkM/giphy.gif",
    "https://media.giphy.com/media/7VMkLFlXCUkYE/giphy.gif",
    "https://media.giphy.com/media/AXmn0dVFSyeR2/giphy.gif",
    "https://media1.tenor.com/images/4a6b15b8d111255c77da57c735c79b44/tenor.gif",
    "https://media1.tenor.com/images/9ea4fb41d066737c0e3f2d626c13f230/tenor.gif",
    "https://media1.tenor.com/images/d14969a21a96ec46f61770c50fccf24f/tenor.gif",
    "https://media1.tenor.com/images/9d907ed56fa1c8c011791e494b1d6ce0/tenor.gif",
    "https://media1.tenor.com/images/0892a52155ac70d401126ede4d46ed5e/tenor.gif",
    "https://media1.tenor.com/images/bfb3c0e51e505330705c35ea10010894/tenor.gif",
    "https://media1.tenor.com/images/bf52b05fde72f946aa22ad36a44d3fa4/tenor.gif",
    "https://media1.tenor.com/images/6138bdbf998fde7638b8362499ac5427/tenor.gif",
    "https://media1.tenor.com/images/4eed54377433c396ce2d9ad9ee5d22ef/tenor.gif",
    "https://media1.tenor.com/images/fd82ea3e68042d13e939f22fa466403a/tenor.gif",
    "https://gifimage.net/wp-content/uploads/2018/11/violent-slapping-anime-gif.gif",
    "https://gifimage.net/wp-content/uploads/2018/11/violent-slapping-anime-gif-6.gif",
    "https://gifimage.net/wp-content/uploads/2017/07/anime-slap-gif-18.gif",
    "https://gifimage.net/wp-content/uploads/2017/07/anime-slap-gif-11.gif",
    "https://gifimage.net/wp-content/uploads/2017/07/anime-slap-gif-8.gif",
    "https://gifimage.net/wp-content/uploads/2017/07/anime-slap-gif-7.gif",
    "https://gifimage.net/wp-content/uploads/2017/07/anime-slap-gif-6.gif",
    "https://gifimage.net/wp-content/uploads/2017/07/anime-slap-gif-3.gif",
    "https://gifimage.net/wp-content/uploads/2017/07/anime-slap-gif-14.gif",
    "https://gifimage.net/wp-content/uploads/2017/07/anime-slap-gif-12.gif",
    "https://media1.tenor.com/images/7437caf9fb0bea289a5bb163b90163c7/tenor.gif"
  ];

  var hug1 = [
    "https://media.giphy.com/media/13YrHUvPzUUmkM/giphy.gif",
    "https://media.giphy.com/media/du8yT5dStTeMg/giphy.gif",
    "https://media.giphy.com/media/LeAvvCD0YncNG/giphy.gif",
    "https://media.giphy.com/media/JGNmo9nBmmy8U/giphy.gif",
    "https://media.giphy.com/media/kvKFM3UWg2P04/giphy.gif",
    "https://media.giphy.com/media/HaC1WdpkL3W00/giphy.gif",
    "https://media.giphy.com/media/wnsgren9NtITS/giphy.gif",
    "https://media.giphy.com/media/143v0Z4767T15e/giphy.gif",
    "https://media.giphy.com/media/yziFo5qYAOgY8/giphy.gif",
    "https://media.giphy.com/media/EvYHHSntaIl5m/giphy.gif",
    "https://media.giphy.com/media/88usq9ke3jvlm/giphy.gif",
    "https://media.giphy.com/media/LHIRwG1tytH20/giphy.gif",
    "https://media.giphy.com/media/EGlwa3w8hgumA/giphy.gif",
    "https://media.giphy.com/media/3OCOHkV0ZOZ2g/giphy.gif",
    "https://media.giphy.com/media/piChj2arMdD6U/giphy.gif",
    "https://media.giphy.com/media/fLv2F5rMY2YWk/giphy.gif",
    "https://media.giphy.com/media/H5rRRuuANG98I/giphy.gif",
    "https://media.giphy.com/media/JTjSlqiz63j5m/giphy.gif",
    "https://media.giphy.com/media/PnKI8R9sXfd1m/giphy.gif",
    "https://media.giphy.com/media/Ph8gm8bhJCEgmO4n7z/giphy.gif",
    "https://media.giphy.com/media/SYRN0yf7Bu4jm/giphy.gif",
    "https://media.giphy.com/media/TGqhg8CXipgzK8UEdr/giphy.gif",
    "https://media.giphy.com/media/INiX4cFXcrWCs/giphy.gif",
    "https://media.giphy.com/media/yt8EKvAPTXNza/giphy.gif"
  ]

  
  /**
   * @returns {string}
   */


   function slap() {
       return slap1[Math.floor(Math.random() * slap1.length)]
   };

   function hug() {
       return hug1[Math.floor(Math.random() * hug1.length)]
   }

   module.exports = {
    slap,
    hug
  };