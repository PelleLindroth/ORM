const Artist = require('./classes/Artist')

const getArtist = async () => {
  const band = await Artist.getArtist(157)
  band.name = 'Grillkorv'
  band.save()
}

const blur = new Artist('blur')
console.log(blur)
blur.save()

getArtist()