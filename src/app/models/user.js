const Model = require('./model');

class User extends Model {
    // Table name is the only required property.

    static get tableName() {
        return 'users';
    }
    
    static get relationMappings() {
        return {
            
        }
    }
    
}
module.exports = User;