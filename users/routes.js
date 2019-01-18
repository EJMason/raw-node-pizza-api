const checkers = require('../lib/Validators/index')
const error = require('../lib/Errors/responses')
const userHelpers = require('./usersHelpers')
const userController = require('./usersController.js')

const router = exports = module.exports = {}

// ----------------------------- /users route ----------------------------- //
router['/users'] = {

  /**
   * ----------- Create a new user -----------
   *
   * TODO: Check if the user exists already, status code if user exists: ?
   * TODO: ADD new user to the database if they do not already exist, status code: ?
   *
   * * Required Data:
   *    - name (first, last)
   *    - email
   *    - address (line1, line2, city, state, zip)
   *    - password
   *
   * * Success Returned Codes:
   *    - 201 (Created)
   *
   * * Error Codes:
   *     - 400 (Bad Request)          Missing required data fields
   *     - 422 (Unprocessable Entity) Data fields do not pass validation /
   *     - 409 (Conflict)             user already exists
   *     - 500 (Internal Server Error)
   *
   * * Returned Data:
   *    - Object created, less password
   */

  POST: (req, res) => {
    // First make sure the data that has arrived passes validation

    if(!checkers.objectHasAllProperties(req.body, 'name', 'email', 'address', 'password')) {
      return error.custom(req, res, 'Missing required properties: {name, email, address, password}', 422)
    }

    const { name, email, address, password } = req.body

    // send message for invalid name
    if(!checkers.objectHasAllProperties(name, 'first', 'last') || !checkers.isString(name.first) || !checkers.isString(name.last)) {
      return error.custom(req, res, 'Name must contain required properties: {first, last} and must be the correct data type', 422)
    }

    // send message for invalid address
    if(!checkers.objectHasAllProperties(address, 'line1', 'city', 'state', 'zip') ||
      !checkers.isString(address.line1) ||
      !checkers.isString(address.city) ||
      !checkers.isString(address.state) ||
      !checkers.isNumber(address.zip)
    ) {
      return error.custom(req, res, 'Address must contain required properties: {line1, city, state, zip}, and must be the correct data type. line2 is optional', 422)
    }

    if(!userHelpers.stateIsValid(address.state)) {
      return error.custom(req, res, 'State Invalid', 422)
    }

    // Send a message for invalid email
    if(!userHelpers.isEmailValid(email)) {
      return error.custom(req, res, 'Must provide a valid email.', 422)
    }

    // send a message for valid password
    if(!userHelpers.isPasswordValid(password)) {
      return error.custom(req, res, 'Please provide a valid password: 8 characters, at least: 1 digit, one lowercase, one uppercase.', 422)
    }

    // TODO: If user already exists, then return a 409


    //  ?Alright, everything looks good so now what to do in a correct response situation?

    // Hash up the password to store it

    // Create the user in the database

    // send back data to the user, less password and 201 response
    userController.checkIfUserExists(email)
      .then(uid => {
        if (!uid) {
          return error.custom(req, res, 'User Already exists, please login.', 409)
        }

        userController.createNewUser(uid, )
      })




    res.writeHead(201)

    const data = {
      testing: 'success'
    }

    res.end(JSON.stringify(data))
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
  PUT: async (req, res) => {

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
  DELETE: async (req, res) => {

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
  GET: async (req, res) => {

  },



  /**
   * Remove ALL items from a cart
   *
   * !REQUIRES TOKEN
   *
   * Success Returned Data:
   */
  DELETE: async (req, res) => {

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
  POST: async (req, res) => {

  },



  /**
   * Remove item(s) from a cart, full delete of a line item
   *
   * !REQUIRES TOKEN
   *
   * Success Returned Data:
   */
  DELETE: async (req, res) => {

  }
}
