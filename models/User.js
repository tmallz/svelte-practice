const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
	checkPassword(loginPw) {
		return bcrypt.compareSync(loginPw, this.password);
	}
}

User.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		username: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			validate: {
				isEmail: true,
			},
		},
		password: {
			type: DataTypes.VIRTUAL,
			allowNull: false,
			validate: {
                notNull: {
                    msg: 'A password is required' 
                },
                notEmpty: {
                    msg: 'Please provide a password'
                },
				len: {
                    args: [8, 20],
                    msg: 'The password should be between 8 and 20 characters'
                }
			},
		},
        confirmedPassword:{
            type: DataTypes.STRING,
            allowNull: false,
            set(val){
                if ( val === this.password) {
                    const hashedPassword = bcrypt.hashSync(val, 10);
                    this.setDataValue('confirmedPassword', hashedPassword);
                }
            },
            validate: {
                notNull: {
                    msg: 'Both passwords must match'
                }
            }
        }
	},
	{
		hooks: {
			beforeCreate: async newUserData => {
				newUserData.password = await bcrypt.hash(newUserData.password, 10);
				return newUserData;
			},
		},
		sequelize,
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: 'user',
	}
);

module.exports = User;
