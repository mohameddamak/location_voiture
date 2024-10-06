

// const { user } = require("../Models/User.model")

// module.exports = (roles) => {
//     console.log("roles",roles);
//     return (req, res, next) => {
//         console.log("------------------------");
//         console.log("req.user",req)
//         const roleArray = [...roles];
//         if (!roleArray.includes(req.user.role)) {
//             return res.status(401).send({ success: false, message: 'Non autorisé' });
//         }
//         next();
//     };
// };

// const { User } = require("../Models/User.model");

module.exports = (role) => {
   return  (req, res, next) => {

        try {
            console.log(req.user.role);
            if (role) {
                if (req.user.role === role) {

                    next()
                }
                else {
                    return res.status(403).json({ status: 403, error: new Error('Invalid user!') })
                }
            }
            else {
                next()
            }
        } catch (error) {
            return res.status(401).json({ status: 401, error: 'invalid request !' })
        }

    }
}