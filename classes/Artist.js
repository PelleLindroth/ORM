// Constructor should recieve the values for the table columns.
// Methods
// Static members
// Getters and setters for properties
// save() // Persists data to database (updates if exists, otherwise inserts)
// destroy() // Deletes record from table
// Artist.get(id) // Returns an instance of Artist from db with supplied id
// Artist.findByName(name) // Returns all artists with matching name
// Artist.delete(id) // Deletes row wi

const ArtistModel = require('../models/Artist')

class Artist {
  static async getArtist(id) {
    const artist = await ArtistModel.getArtist(id)
    const newArtist = new Artist(artist.Name)
    newArtist.id = artist.ArtistId
    return newArtist
  }

  static findByName(name) {
    const artist = ArtistModel.findArtistByName(name)
  }

  static delete(id) {
    ArtistModel.deleteArtist(id)
  }

  constructor(name) {
    this.name = name
    this.artistId = null
  }

  save() {
    ArtistModel.saveArtist(this)
  }

  destroy() {
    ArtistModel.deleteArtist(this.ArtistId)
  }
}

module.exports = Artist