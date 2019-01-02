

const router = exports = module.exports = {}

// ----------------------------- /users route ----------------------------- //
router['/users'] = {


  /**
   * Gets information about a user
   *
   * TODO: Check if the user exists already, status code if user exists: ?
   * TODO: ADD new user to the database if they do not already exist, status code: ?
   *
   * Required Data: name, email, address, street address, password
   *
   * Success Returned Data:
   */
  GET: (req, res) => {
    res.writeHead(200)

    const data = {
      statusCode: 200,
      data: 'get users'
    }

    res.end(JSON.stringify(data))
  },



  /**
   * Create a new user
   *
   * TODO: Check if the user exists already, status code if user exists: ?
   * TODO: ADD new user to the database if they do not already exist, status code: ?
   *
   * Required Data: name, email, address, street address, password
   *
   * Success Returned Data:
   */
  POST: (req, res) => {

  },



  /**
   * Change User information
   *
   * TODO: Check if the user exists already, status code if user exists: ?
   * TODO: ADD new user to the database if they do not already exist, status code: ?
   *
   * Required Data: name, email, address, street address, password
   *
   * !REQUIRES TOKEN
   *
   * Success Returned Data:
   */
  PUT: (req, res) => {

  },



  /**
   * Deletes user that already exists
   *
   * TODO: REMOVE user from the database even if they do not exist, status code: ?
   *
   * Required Data: name, email, address, street address, password
   *
   * !REQUIRES TOKEN
   *
   * Success Returned Data:
   */
  DELETE: (req, res) => {

  }
}

// ----------------------------- /users/cart route ----------------------------- //

router['/users/cart'] = {


  /**
   * GET all of the items in the cart
   *
   * !REQUIRES TOKEN
   *
   * Success Returned Data:
   */
  GET: (req, res) => {

  },



  /**
   * Remove ALL items from a cart
   *
   * !REQUIRES TOKEN
   *
   * Success Returned Data:
   */
  DELETE: (req, res) => {

  }
}

router['/users/cart/item'] = {


  /**
   * ADD item(s) in the cart
   *
   * Use this to change quantities. If user
   *      changes the quantity it will overwrite with the new quantity
   *
   * !REQUIRES TOKEN
   *
   * Success Returned Data:
   */
  POST: (req, res) => {

  },



  /**
   * Remove item(s) from a cart, full delete of a line item
   *
   * !REQUIRES TOKEN
   *
   * Success Returned Data:
   */
  DELETE: (req, res) => {

  }
}
