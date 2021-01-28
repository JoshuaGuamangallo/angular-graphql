import User from '../../models/user';
const Mutation = {
    createUser: async (_, { name, email, age, address, phone }) => {
        const newUser = new User({ name, email, age, address, phone });
        return await newUser.save();
    },
    updateUser: async (_, { id, name, email, age, address, phone}) => {
        return await User.findByIdAndUpdate(id, { name, email, age, address, phone });
    },
    deleteUser: async (_, { id }) => {
        return await User.findByIdAndDelete(id);
    }

}

export default Mutation;