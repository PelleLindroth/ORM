const db = require('../db/connection')

const getArtist = id => {
  return new Promise((resolve, reject) => {
    db.get(
      `SELECT * FROM artists
      WHERE ArtistId = ?`, [id],
      (err, row) => {
        err && reject(err)

        resolve(row)
      }
    )
  })
}

const saveArtist =

  module.exports = {
    getArtist
  }