const db = require('../db/connection.js')

const getAlbum = id => {
  return new Promise((resolve, reject) => {
    db.get(
      `SELECT * FROM albums
     WHERE AlbumId = ?`,
      [id],
      (err, row) => {
        err && reject(err)
        !row && reject("No Artist found!")
        resolve(row)
      }
    )
  })
}

module.exports = {
  getAlbum,
}
